import { TezosToolkit } from "@taquito/taquito"
import { BeaconWallet } from "@taquito/beacon-wallet"
import { NetworkType } from "@airgap/beacon-sdk"
import { useState, useEffect, memo } from 'react'
const signalR = require("@microsoft/signalr");

export function useTezos() {
  const RPC_URL = 'https://rpc.hangzhounet.teztnets.xyz'
  const Tezos = new TezosToolkit(RPC_URL)
  const wallet = new BeaconWallet({ name: "Orbitez" })

  Tezos.setWalletProvider(wallet)

  const [address, setAddress] = useState('')
  useEffect(() => {
    
    connectionExistsCheck()

    const connection = new signalR.HubConnectionBuilder()
    .withUrl("https://api.hangzhou2net.tzkt.io/v1/events") //https://api.tzkt.io/ MAINNEt
    .build();

    async function init() {
        // open connection
        await connection.start();
        // subscribe to head
        await connection.invoke("SubscribeToBlocks"); 

        await connection.invoke('SubscribeToOperations', {
          address: 'KT1NXgqXUfYFowmoZK6FhUTxmcqkjzZnV5rg',
          types: 'transaction'
        })
    };

    // auto-reconnect
    connection.onclose(init);

    connection.on("blocks", (msg) => {
        console.log('BLKS',msg);            
    });

    connection.on("operations", (msg) => {
      console.log('TRANS', msg);            
  });

    init();
  }, [])

  const connectionExistsCheck = async () => {
    const activeAccount = await wallet.client.getActiveAccount()
    if (activeAccount) {
      console.log(`Already connected: ${activeAccount.address}` )
      setAddress(activeAccount.address)
      return true
    } 
    return false
  }

  const connectWallet = async () => {
    const connectionExists = await connectionExistsCheck()
    if (!connectionExists) {
      await wallet.requestPermissions({ network: {
        type: NetworkType.HANGZHOUNET,
        rpcUrl: RPC_URL,
      },})
      const addr = await wallet.getPKH()
      setAddress(addr)
      console.log("New connection: ", addr)
    } else {
      alert(`Already connected`)
    }
  }

  const disconnectWallet = async () => {
    await wallet.clearActiveAccount()
    setAddress('')
    alert('Disconnected.')
  }


  return {
    connectWallet,
    disconnectWallet,
    wallet,
    Tezos,
    address
  }
}

