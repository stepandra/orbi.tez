import React from 'react';
import Head from 'next/head'

export default function lending() {
    
    return (
        <div class="bgVideo">
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Orbitez.io</title>
                <link href='style.css' rel="stylesheet" />
                <link href='style-lp.css' rel="stylesheet" />
            </Head>
            
            
            <header class="header container">
                <a class="header__link link" href="/leaderboard">LEADERBOARD</a>
                <a class="header__link link" href="#">LOGOUT</a>
            </header>
            
            <main class='lp container container--small'>
                <img class="lp__logo" src="/img/logo.png" alt="Logo" />
                <p class="lp__text">Fight with players from all over the world as you try to become the biggest Planet in a solar system! Control your tiny planet and eat other players to grow larger. Mint your own, unique generative planet as NFT to enter the battlefield!</p>
                <a class="lp__btn btn btn--center btn--neon" href="">MINT NFT 1 XTZ</a>
            </main>

            <video  loop muted autoplay poster="/img/lp-bg-poster.png" class="bgVideo__video">
                <source src="https://murashkilingerie.com/public/uploads/lp-bg-video-8.mp4" type="video/mp4" ></source>
                <source src="https://murashkilingerie.com/public/uploads/lp-bg-video-8.webm" type="video/webm" ></source>
            </video>
            <div class="bgVideo__overlay"></div>
        </div>
    )
}

