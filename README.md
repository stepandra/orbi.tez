# orbitez

P2E canvas game with NFT pass/skin and DeFi mechanics 



- [Landing page ](https://orbitez.io)
- [Dashboard ](https://orbitez.io/dashboard)
- [Demo mode ](https://orbitez.io/hud)


- [Latest room contract: KT1MvVwGsxMSSvoJd8iQJ1ykcrF6LBNmXqYs](https://better-call.dev/hangzhou2net/KT1KFneVK82gYXA8z27bbb5aS8snyAZFiYay/interact?entrypoint=enterRoom)
- [ORB token FA2 contract: KT1VSEeZZ5SiKeUGmEf7Drh4tRinNzEUBEJg](https://better-call.dev/hangzhou2net/KT1VSEeZZ5SiKeUGmEf7Drh4tRinNzEUBEJg/operations)
- [fxhash Generative Token ](https://www.fxhash.xyz/generative/3808)


Room Contract
Entrypoints: EnterRoom, Refund, EndGame

## Transactions flow | Liquidity Mechanics

1) Mint or buy for 1tez unique orbitoid to get into game
2) Each 0.8tez from primary sale -> liquidity pool with ORB token.
3) Other 0.2tez -> DAO contract(TODO on Homebase)
4) Enter battleground lobby with orbitoid NFT and choose bet type: tez or LP token (orb/tez)
5) 80% goes to TOP 3 players at the time of baking the final block(1 round = 15 blocks in Tezos) battleground bank
6) 15% goes to Crunchy Deep Freezer contract, to increase liquidity (orb/tez)
7) 5% goes to ORB DAO contract
8) TOP 3 players recieve 80 ORB token per round (1st: 40 ORB, 2nd: 25 ORB, 3rd: 15 ORB) also (1st: 4tez, 2nd: 2.5tez, 3rd: 1.5tez)
9) Other players who are not in the TOP 3 - recieve 3 ORB token each without tez rewards


![CleanShot 2021-12-18 at 18 42 52](https://user-images.githubusercontent.com/4786779/146650715-1f62c00e-1ae4-489d-86ef-a25f7b6be4bd.png)


## Planned

- [x] Animated Orbitoid(planet) in action!
- [x] Play with your own FA2 NFT as a skin in orbitez game (hold 100 ORB token to unlock this feature)
- [ ] ORB token farming (incentivize farmers to bet in LP as good as players to farm with ORB rewards)
- [ ] Agar(orbitez) proof of leaderboard (Merkle tree -> own tzstamp server). 
- [ ] Each block send tx with merkle tree of all player key events in the game
- [ ] Federative servers(matrix protocol or simmilar), incentive for local node runners(by played games on this server count)
- [ ] Each node check all another 


![CleanShot 2021-12-18 at 18 21 09](https://user-images.githubusercontent.com/4786779/146650093-aa8692e7-b332-4689-ad58-7b9d8e788214.png)


## Game Universe

The player will have to take part in the process of forming solar systems. He will fight for survival by controlling a small little planet, which is gradually gaining mass by collecting particles of matter and other small celestial bodies.
The speed in the game is measured not in minutes, but in hundreds of thousands of years. Thus, one match lasts about 100 thousand years.
Time in the game universe runs its course. Inevitably there appears technologically advanced civilizations. Over time, the game will change Epoches. The initial set of planets represents the First Epoch of "natural planets". The Second Epoch of "wandering planets" will contain worlds modified by a technically advanced civilization. On them, you will find Space elevators, planetary engines, Bussard ramjets, etc. The Third Epoch of "artificial planets" will consist of fully artificial cosmic bodies, such as Dyson spheres and Ringworlds. 

## Gameplay

Fight with players from all over the world as you try to become the largest Planet in a solar system! Control your tiny planet and eat other players to grow larger. Mint your own, unique generative planet as NFT to enter the battlefield!


Presentation: https://docs.google.com/presentation/d/1pYjczLbxw6lLJv-t_jSi37i-G3O2qyT-tT-gAGt_x-0/edit

