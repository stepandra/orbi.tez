import React from 'react';
import Head from 'next/head'

export default function leaderboard() {
    
    return (
        <body class="background">
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Leaderboard - Orbitez.io</title>
            </Head>
            <header class="header">
                <h1 class="header__title">Leaderboard</h1>
            </header>
            
            <main class='page container container--small'>

                <div class="listBlock listBlock--wide">
                    <ul class="listBlock__list">
                        <li class="listBlock__item">
                            <p class="listBlock__rank">1</p>
                            <p class="listBlock__nft">NFT #456677 </p> 
                            <span class="listBlock__score">45667374647</span>
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
                            <span class="listBlock__score">45667374647</span>
                        </li>
                        <li class="listBlock__item">
                            <p class="listBlock__rank">4</p>
                            <p class="listBlock__nft">NFT #87879 </p> 
                            <span class="listBlock__score">45667374647</span>
                        </li>
                        <li class="listBlock__item">
                            <p class="listBlock__rank">5</p>
                            <p class="listBlock__nft">NFT #878665 </p> 
                            <span class="listBlock__score">45667374647</span>
                        </li>
                        <li class="listBlock__item">
                            <p class="listBlock__rank">6</p>
                            <p class="listBlock__nft">NFT #456677 </p> 
                            <span class="listBlock__score">4566737464</span>
                        </li>
                        <li class="listBlock__item">
                            <p class="listBlock__rank">7</p>
                            <p class="listBlock__nft">NFT #456677 </p> 
                            <span class="listBlock__score">4566737464</span>
                        </li>
                        <li class="listBlock__item">
                            <p class="listBlock__rank">8</p>
                            <p class="listBlock__nft">NFT #456677 </p> 
                            <span class="listBlock__score">456673746</span>
                        </li>
                        <li class="listBlock__item">
                            <p class="listBlock__rank">9</p>
                            <p class="listBlock__nft">NFT #456677 </p> 
                            <span class="listBlock__score">37117374</span>
                        </li>
                        <li class="listBlock__item">
                            <p class="listBlock__rank">10</p>
                            <p class="listBlock__nft">NFT #456677 </p> 
                            <span class="listBlock__score">3566737</span>
                        </li>
                    </ul>
                </div>

            </main>
        </body>
    )
}