import React from 'react';
import Head from 'next/head'

export default function lending() {
    
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Orbitez.io</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff" />
            </Head>
            
            <header class="header container">
                <a class="header__linkLeft link" href="/leaderboard">LEADERBOARD</a>
                <a class="header__linkRight link" href="#">LOGIN</a>
            </header>
            
            <main class='lp container container--small'>
                <img class="lp__logo" src="/img/logo-big.png" alt="Logo" />
                <p class="lp__text">Fight with players from all over the world as you try to become the biggest Planet in a solar system! Control your tiny planet and eat other players to grow larger. Mint your own, unique generative planet as NFT to enter the battlefield!</p>
                <a class="lp__btn btn btn--center btn--neon" href="">MINT NFT 1 XTZ</a>
            </main>

            <video class="bgVideo__video" loop="true" muted="true" autoplay="true" poster="/img/lp-bg-poster.png">
                <source src="/video/lp-bg-video-6.mp4" type="video/mp4" />
                <source src="/video/lp-bg-video-8.webm" type="video/webm" />
            </video>
            <div class="bgVideo__overlay"></div>
        </div>
    )
}

