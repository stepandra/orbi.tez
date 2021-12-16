function main (const number : int; const storage : int) : list (operation) * int 
is ((nil : list (operation)), number + 1)








// type enterRoomParameter = tez
type refundParameter = address
type endGameParameter = list(address)
type modifySetupParameter = {
    mod_blocks_in_round: nat, 
    mod_orb_rewards: list(nat), 
    mod_player_max: nat, 
    mod_acccepted_tokens: set(address)
}

type roomEntrypoints = 
| EnterRoom(bool)
| Refund(refundParameter)
| EndGame(endGameParameter)
| PauseEntry(bool)
| ModifySetup(modifySetupParameter);

type storage = {
    admin: address,
    start_block: nat,
    end_block: nat,
    bank_in_tez: tez,
    bank_in_tokens: nat,
    lobby_is_open: bool,
    players: set(address),
    pause_on: bool,
    blocks_in_round: nat,
    players_max: nat,
    orb_rewards: list(nat),
    accepted_tokens: set(address),
    leaderboard: list(address),
}

type ret


let open_room = ((jackpot_amount, endgame_block, store): (tez, nat, storage)) : returnType => {
    if (Tezos.source != store.admin) {
        failwith("Admin not recognized.")
    } else {
        if (!store.lobby_is_open) {
            if (Tezos.amount < jackpot_amount) {
                failwith("The admin does not own enough tez")
            } else {
                ();
            }
        } else {
            failwith("A room is already open.")
        }
    };
    (([]: list(operation)), store);
};