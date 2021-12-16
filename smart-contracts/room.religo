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
type register = map (address, int);
type storage = {
    admin: address,
    start_block: nat,
    end_block: nat,
    bank_in_tez: tez,
    bank_in_tokens: nat,
    lobby_is_open: bool,
    players: register,
    pause_on: bool,
    blocks_in_round: nat,
    players_max: nat,
    orb_rewards: list(nat),
    accepted_tokens: set(address),
    leaderboard: list(address),
    counter: int,
}

type returnType = (list (operation), storage);
// redo
let refund  = ((param, store): (refundParameter, storage)) : returnType => {
    let refund_addr = param.refundAddr;
    (([]: list(operation)), store);
} 

let increase = ((store) : (storage)) : returnType =>  (([]: list(operation)), {...store, counter:store.counter+1});

let enter_room = ((param, store): (enterRoomParameter, storage)) : returnType => {
    let add = (m: register): register => 
        Map.add ((Tezos.sender : address), store.counter, m);

    let is_lp = param.is_lp;
    let bank = param.bank;
    
    let players = store.players;
    let current_player : address = Tezos.sender;
    let enter_price: tez = 1tez;
    if (Tezos.amount == enter_price) {
        if (Map.size(players) > 10n) {
            failwith("Room is full, go fuck yourself!")
            } else {();}
    } else {
        failwith("Incorrect amount of 1tez.");
    };
     (([]: list(operation)), store);
};

let main = ((action, store): (roomEntrypoints, storage)) : returnType =>
    switch (action) {
    | EnterRoom(param) => enter_room(param, store)
    | Refund(param) => refund(param, store)
    };
