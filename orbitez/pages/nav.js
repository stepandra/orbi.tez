import Head from 'next/head'
import { useTezos } from '../hooks/useTezos'
import { CONTRACT_ADDRESS } from '../constants'

export default function Home() {
    const { connectWallet, disconnectWallet, Tezos, address } = useTezos()

    const enterRoom = async () => {
        const contract = await Tezos.wallet.at(CONTRACT_ADDRESS);
        await contract.methods.enterRoom(1, true).send({ amount: 1 })
    }

    const refund = async () => {
        const contract = await Tezos.wallet.at(CONTRACT_ADDRESS);
        await contract.methods.refund(address).send()
    }

    return (
        <div class="background">
            <Head>
                <title>Navigation - Orbi.tez</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <header class="header">
                <h1 class="header__title">Navigation</h1>
            </header>
            <main className='pageNav container'>
                <a onClick={() => connectWallet()} className='btn btn--center btn--neon'>CONNECT WALLET</a>
                <a onClick={() => disconnectWallet()} className='btn btn--center btn--neon'>DISCONNECT WALLET</a>
                <a disabled={address == ''} className='btn btn--center btn--neon' onClick={() => enterRoom()}>Enter Room</a>
                <a disabled={address == ''} className='btn btn--center btn--neon' onClick={() => refund()}>Refund</a>
                <a href='/dashboard' className='btn btn--center btn--neon'>DASHBOARD</a>
            </main>
        </div>
    )
}
