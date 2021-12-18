import React from 'react';
import Head from 'next/head'

export default function hud() {
    
    return (
        <body class="bgImageNone">
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Hud - Orbitez.io</title>
                <link href='style.css' rel="stylesheet" />
            </Head>

            <header class="header">
                <div class="blocksTimer">
                    
                </div>
                
                <div class="panel">
                    <div class="panel__icon">
                        <a class="panel__link" href="">
                            <img class="panel__img" src="/img/icon-home.png" alt="Home icon" />
                        </a>
                    </div>
                    <div class="panel__info">
                        <p class="panel__text">SCORE</p>
                        <p class="panel__num">35000</p>
                    </div>
                </div>
            </header>
            
            <main class='page container container--big'>
                
            </main>
        </body>
    )
}
