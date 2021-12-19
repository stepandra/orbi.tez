import React from 'react';
import Head from 'next/head'


export default function leaderboard() {
    
    return (
        <div class="background">
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Leaderboard - Orbitez.io</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <header class="header container container--big">
                <a class="header__logo logo" href='/'>
                    <img class="header__logoImg" src='/img/logo.png' ></img>
                </a>
                <h1 class="header__title">Leaderboard</h1>
                <div class="header__panel panel">
                    <div class="panel__icon">
                        <a class="panel__link" href="/dashboard">
                            <img class="panel__img" src="/img/icon-home.png" alt="Home icon" />
                        </a>
                    </div>
                    <div class="panel__info">
                        <p class="panel__text">BALANCE</p>
                        <p class="panel__num"> ꜩ25000</p>
                    </div>
                </div>
            </header>
            
            <main class='page container container--small'>

                <div class="listBlock listBlock--wide">
                    <ul class="listBlock__list">
                        <li class="listBlock__item">
                            <p class="listBlock__rank">1</p>
                            <p class="listBlock__nft">NFT #456677 </p> 
                            <p class="listBlock__score">45667374647</p>
                            <a class="listBlock__link" href=""></a>
                        </li>
                        <li class="listBlock__item listBlock__item--active">
                            <p class="listBlock__rank">2</p>
                            <p class="listBlock__nft">NFT #686890090876</p>  
                            <p class="listBlock__score">6868937</p>
                            <a class="listBlock__link" href=""></a>
                        </li>
                        <li class="listBlock__item">
                            <p class="listBlock__rank">3</p>
                            <p class="listBlock__nft">NFT #678978787 </p> 
                            <p class="listBlock__score">45667374647</p>
                            <a class="listBlock__link" href=""></a>
                        </li>
                        <li class="listBlock__item">
                            <p class="listBlock__rank">4</p>
                            <p class="listBlock__nft">NFT #87879 </p> 
                            <p class="listBlock__score">45667374647</p>
                            <a class="listBlock__link" href=""></a>
                        </li>
                        <li class="listBlock__item">
                            <p class="listBlock__rank">5</p>
                            <p class="listBlock__nft">NFT #878665 </p> 
                            <p class="listBlock__score">45667374647</p>
                            <a class="listBlock__link" href=""></a>
                        </li>
                        <li class="listBlock__item">
                            <p class="listBlock__rank">6</p>
                            <p class="listBlock__nft">NFT #456677 </p> 
                            <p class="listBlock__score">4566737464</p>
                            <a class="listBlock__link" href=""></a>
                        </li>
                        <li class="listBlock__item">
                            <p class="listBlock__rank">7</p>
                            <p class="listBlock__nft">NFT #456677 </p> 
                            <p class="listBlock__score">4566737464</p>
                            <a class="listBlock__link" href=""></a>
                        </li>
                        <li class="listBlock__item">
                            <p class="listBlock__rank">8</p>
                            <p class="listBlock__nft">NFT #456677 </p> 
                            <p class="listBlock__score">456673746</p>
                            <a class="listBlock__link" href=""></a>
                        </li>
                        <li class="listBlock__item">
                            <p class="listBlock__rank">9</p>
                            <p class="listBlock__nft">NFT #456677 </p> 
                            <p class="listBlock__score">37117374</p>
                            <a class="listBlock__link" href=""></a>
                        </li>
                        <li class="listBlock__item">
                            <p class="listBlock__rank">10</p>
                            <p class="listBlock__nft">NFT #456677 </p> 
                            <p class="listBlock__score">3566737</p>
                            <a class="listBlock__link" href=""></a>
                        </li>
                    </ul>
                </div>

            </main>
        </div>
    )
}