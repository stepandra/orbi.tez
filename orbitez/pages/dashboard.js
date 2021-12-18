import React from 'react';
import Head from 'next/head'

export default function dashboard() {
    
    return (
        <body>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Dashboard - Orbitez.io</title>
                <link href='style.css' rel="stylesheet" />
            </Head>
            <header class="header">
                <a class="header__link lBoardLink" href="/leaderboard">LEADERBOARD</a>
                <h1 class="header__title">Dashboard</h1>
                <div class="header__panel panel">
                    <div class="panel__icon">
                        <a class="panel__link" href="">
                            <img class="panel__img" src="/img/icon-home.png" alt="Home icon" />
                        </a>
                    </div>
                    <div class="panel__info">
                        <p class="panel__text">BALANCE</p>
                        <p class="panel__num">ꜩ25000</p>
                    </div>
                </div>
            </header>
            
            <main class='page container'>
                <div class="page__left">
                    <div class="listBlock">
                        <h2 class="listBlock__title">Select Planet</h2>
                        <ul class="listBlock__list">
                            <li class="listBlock__item">NFT #456677</li>
                            <li class="listBlock__item listBlock__item--active">NFT #686890090876</li>
                            <li class="listBlock__item">NFT #678978787</li>
                            <li class="listBlock__item">NFT #87879</li>
                            <li class="listBlock__item">NFT #878665</li>
                            <li class="listBlock__item">NFT #86656645454</li>
                        </ul>
                    </div>
                    <a class="btn btn--wide" href="">MINT NEW NFT</a>
                </div>

                <div class="page__center">
                    <div class="planet planet--bgCircle">
                        <img class="planet__img" src="/img/planet.png" alt="planet background" />
                        <a class="planet__btn btn btn--center" href="">PLAY 0.001 XTZ</a>
                    </div>
                </div>

                <div class="page__right">
                    <div class="listBlock">
                        <h2 class="listBlock__title">Statistics</h2>
                        <ul class="listBlock__list">
                            <li class="listBlock__item">Matter eaten <span>12345</span></li>
                            <li class="listBlock__item">Highest mass <span>12345</span></li>
                            <li class="listBlock__item">Time alive <span>12:45</span></li>
                            <li class="listBlock__item">On leaderboard <span>0:43</span></li>
                            <li class="listBlock__item">Planets eaten <span>134</span></li>
                            <li class="listBlock__item">Top position <span>134</span></li>
                        </ul>
                    </div>
                    <a class="btn btn--wide" href="/waiting-room">PLAY 1 XTZ</a>
                    <a class="btn btn--wide btn--second" href="/waiting-room">PLAY 10 XTZ</a>
                </div>
            </main>
        </body>
    )
}
