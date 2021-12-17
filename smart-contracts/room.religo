type enterRoomParameter = {
    is_lp: bool,
    bank: tez
}
type refundParameter = {
    refundAddr: address,
};
// type endGameParameter = map(address)
// type modifySetupParameter = {
//     mod_blocks_in_round: nat, 
//     mod_orb_rewards: map(nat), 
//     mod_player_max: nat, 
//     mod_acccepted_tokens: set(address)
// }

type roomEntrypoints = 
  EnterRoom(enterRoomParameter)
| Refund(refundParameter);
// | EndGame(endGameParameter);
// | PauseEntry(bool)
// | ModifySetup(modifySetupParameter);
type register = map (address, nat);
type storage = {
    // admin: address,
    // start_block: nat,
    // end_block: nat,
    // bank_in_tez: tez,
    // bank_in_tokens: nat,
    // lobby_is_open: bool,
    players: register,
    // pause_on: bool,
    // blocks_in_round: nat,
    // players_max: nat,
    // orb_rewards: list(nat),
    // accepted_tokens: set(address),
    // leaderboard: list(address),
    counter: nat,
}

type returnType = (list (operation), storage);

// TODO: Refun
let refund  = ((action, store): (refundParameter, storage)) : returnType => {
    // let refund_addr = param.refundAddr;
    let dest:address = (Tezos.sender);
    let counter : contract(refundParameter) =
    switch (Tezos.get_contract_opt (dest) : option (contract (refundParameter))) {
    | Some (contract) => contract;
    | None => (failwith ("Contract not found.") : contract (refundParameter));
    };
    let op: operation = Tezos.transaction(action, 1tez, counter);
    (([op]: list(operation)), store);
} 

let addPlayer = ( store : storage ): map(address,nat) => {
    let  player_points: option (nat) = Map.find_opt(Tezos.sender, store.players);
    switch (player_points) {
        | Some(points) => 
            (failwith("You are already"): map(address, nat));
        | None => 
            Map.add(Tezos.sender, store.counter, store.players)
    };
};

let enter_room = ((param, store): (enterRoomParameter, storage)) : returnType => {
    let add = ((s, counter): (storage, nat)): storage => {...s, counter: s.counter + counter};
    let is_lp = param.is_lp;
    let bank = param.bank;
    let players = store.players;
    let current_player : address = Tezos.sender;
    let enter_price: tez = 1tez;
    if (Tezos.amount == enter_price) {
        if (Map.size(players) > 9n) {
            failwith("Room is full, go fuck yourself!")
            } else {
            //   let new_map = (m : register) : register => Map.add ((Tezos.sender : address), store.counter, store.players);
            // let add_player = ((players, s): (storage, storage)): map( address, int) => {...s, players : new_map } ;
            ();
            }
    } else {
        failwith("Incorrect amount of 1tez.");
    };

    let store = add({players: addPlayer(store), counter: store.counter}, 1n);
     (([]: list(operation)), store);
};

let main = ((action, store): (roomEntrypoints, storage)) : returnType =>
    switch (action) {
    | EnterRoom(param) => enter_room(param, store)
    | Refund(param) => refund(param, store)
    };


