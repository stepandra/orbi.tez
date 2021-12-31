#include "./type.religo"

let addr_to_contract = (addr: address) => {
    let maybe_contract: option(contract(unit)) = Tezos.get_contract_opt(addr);
    switch (maybe_contract) {
        | Some (contract) => contract
        | None => (failwith ("Contract not found.") : contract (unit))
        };
    }

let get_fa20_transfer_entrypoint = (contract: address) :contract(transfer_fa20_parameters) => {
    switch (Tezos.get_entrypoint_opt("%transfer", contract): option(contract(transfer_fa20_parameters))) {
        | Some (contract) => contract
        | None => failwith("Not FA 2.0 contract")
    };
}
let amount_send = (length: nat) => { 
    let reward_amount: jackpotAmountType = (4_000_000n, 2_500_000n);
    let third_place: nat = abs(reward_amount[0] - reward_amount[1]);
    let default_token_reward: nat = 300000n;

    if (length == 0n) {reward_amount[0]} else {
        if (length == 1n) { reward_amount[1] } else {
            if (length == 2n) { third_place } else {
                if (length > 2n && length < 10n) {default_token_reward}
                else {(failwith("Wrong length"): nat)}
            }
        }
    }
};


let transfer_fa20_asset = ((result, i): (list(operation), address)) : list(operation) => {

    let leng: nat = amount_send(List.length(result));
    let token_amount: nat = leng * 1000n;
    let orb_address: address = ("KT1VSEeZZ5SiKeUGmEf7Drh4tRinNzEUBEJg": address);
    let tok_contract: contract(transfer_fa20_parameters) = get_fa20_transfer_entrypoint(orb_address);
    let owner: address = Tezos.self_address;

    let param: transfer_fa20_parameters = [{
            from_: owner, 
            txs: [{
                to_: i,
                token_id: 0n,
                amount: token_amount,
            }],
        }];

    let op_token = Tezos.transaction(
      param,
      0mutez,
      tok_contract);

    [op_token, ...result];
};


let transfer_tez =((result, i): (list(operation), address)): list(operation) => {
    let length: nat = abs(List.length(result) - 10n);
    let leng: nat = amount_send(length);
    let natural_to_mutez = (a: nat) => { a * 1mutez };
    let reward_tez: tez = natural_to_mutez(leng);
    let dest = addr_to_contract(i);

    if (length > 2n && reward_tez == 300000mutez) {result;} else {
        let tz_op: operation = Tezos.transaction((), reward_tez, dest);
        [tz_op, ...result];
    }
}

let removePlayer = ( store : storage ): map(address, nat) => {
    let player_refund: option (nat) = Map.find_opt(Tezos.sender, store.players);
    switch (player_refund) {
        | Some (_entrys) => Map.remove(Tezos.sender, store.players)
        | None => (failwith ("Nothing to refund!"): map(address, nat))
    };
}

let start_block_level = ((s, block): (storage, nat)): nat => {
    if(Map.size(s.players) == 9n) { 
        s.start_block + 1n + block
    } else {
       0n
    }
}

let refund  = ((_action, store): (refundParameter, storage)) : returnType => {
    if (Map.size(store.players) == 10n) {
        (failwith ("Game already started! Play or die!"): returnType);
    } else {
    let dest = addr_to_contract(Tezos.sender);
    let op = Tezos.transaction((), 1tez, dest);
    (([op]: list(operation)), {...store, players: removePlayer(store)})
    }
} 


let addPlayer = ( store : storage ): map(address,nat) => {
    let player_points: option (nat) = Map.find_opt(Tezos.sender, store.players);
    let entry_block: nat = Tezos.level;

    switch (player_points) {
        | Some(_points) => 
            (failwith("You are already"): map(address, nat));
        | None => 
            Map.add(Tezos.sender, entry_block, store.players)
    };
};

[@inline]
let enter_room = ((_param, store): (enterRoomParameter, storage)) : returnType => {

    // let is_lp = param.is_lp;
    // let bank = param.bank;
    let players = store.players;
    let enter_price: tez = 1tez;
    let entries = Map.size(players);

    if (Tezos.amount == enter_price) {
        if (entries > 9n) {
            failwith("Room is full, try again later!")
            } else {();}
    } else {
        failwith("Incorrect amount of 1tez.");
    };

    let block: nat = Tezos.level;
    let prod_block: nat = start_block_level(store, block);
    let finish_block: nat = prod_block + 20n;
    let store = {players: addPlayer(store), start_block: prod_block, end_block: finish_block };
     (([]: list(operation)), store);
};

let endgame = ((leader_list, store): ( endgameParameter, storage )) : returnType => {
    let compare_height: nat = Tezos.level;
    if (compare_height < store.end_block || Map.size(leader_list) < 10n) {
        failwith("Game not ended!");
    } else {
        // let convert = (i : address) : contract(unit) => addr_to_contract( i );
        // let contract_leader_list : list (contract(unit)) = List.map (convert, leader_list);
        let token_op_list : list(operation) = List.fold_left(transfer_fa20_asset, []:list(operation), leader_list);
        let all_op_list: list(operation) = List.fold_left(transfer_tez, token_op_list, leader_list);
        let room_reset: register = Map.empty;

        ((all_op_list : list(operation)), { ...store, players:room_reset, start_block: 0n, end_block: 0n});  
    };
    
};

let main = ((action, store): (roomEntrypoints, storage)) : returnType =>
    switch (action) {
    | EnterRoom(param) => enter_room(param, store)
    | Refund(param) => refund(param, store)
    | EndGame(param) => endgame(param,store)
    };