import React from 'react';
import Head from 'next/head'

export default function hud() {
    
    return (
        <body>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Waiting room - Orbitez.io</title>
                <link href='style.css' rel="stylesheet" />
            </Head>
            <header class="header">
                <h1 class="header__title">Waiting room</h1>
            </header>
            
            <main class="page container">
                <div class="page__left">
                    <div class="listBlock">
                        <h2 class="listBlock__title blockTitle">Waiting for players 6/10</h2>
                        <ul class="listBlock__list">
                            <li class="listBlock__item">NFT #456677</li>
                            <li class="listBlock__item listBlock__item--active">NFT #686890090876</li>
                            <li class="listBlock__item">NFT #678978787</li>
                            <li class="listBlock__item">NFT #87879</li>
                            <li class="listBlock__item">NFT #878665</li>
                            <li class="listBlock__item">NFT #86656645454</li>
                        </ul>
                    </div>
                </div>

                <div class="page__center">
                    <div class="planet">
                        <img class="planet__img" src="/img/planet.png" alt="planet background" />
                        <a class="planet__btn btn btn--center" href="/hud">START</a>
                        <a class="btn btn--center" href="/dashboard">CANCEL</a>
                    </div>
                </div>

                <div class="page__right">
                    
                </div>
            </main>
        </body>
    )
}