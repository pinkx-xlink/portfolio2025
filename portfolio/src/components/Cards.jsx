import React from 'react'
import CardFactory from './CardFactory';
import './Cards.css'

import gengarImg from './img/gengar.png';

import pokemonGameScreenshot from './projectScreenshots/pokemonStyleGame.jpeg';
import googleCloneScreenshot from './projectScreenshots/googleClone.jpeg';
function Cards() {
  return (
    <div className="cards">
        <h2>Check out some of my projects</h2>
        <p>Where art and tech intersect</p>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardFactory 
                    src={pokemonGameScreenshot}
                    text="
                    filler filler filler filler
                    filler filler filler filler
                    filler filler filler filler
                    filler filler filler filler
                    filler filler filler filler
                    filler filler filler filler
                    filler filler filler filler
                    "
                    label="Pokemon Style 2d Game"
                    // path="/"
                    />
                     <CardFactory
                    src={googleCloneScreenshot}
                    text="
                    filler filler filler filler
                    filler filler filler filler
                    filler filler filler filler
                    filler filler filler filler
                    filler filler filler filler
                    filler filler filler filler
                    filler filler filler filler
                    <a href='https://shaiyans-google-clone.netlify.app/' target='_blank'>
                    Try it </a>
                    "
                    label="Google Clone"
                    path="/"
                    />
                </ul>

                {/* copy and paste card component */}
                <ul className="cards__items">
                    <CardFactory 
                    src={gengarImg}
                    text="
                    filler filler filler filler
                    filler filler filler filler
                    filler filler filler filler
                    filler filler filler filler
                    filler filler filler filler
                    filler filler filler filler
                    filler filler filler filler"
                    label="Minecraft Vacation - Faux Getaway Resort Website"
                    path="/"
                    />
                     <CardFactory 
                    src={gengarImg}
                    text="
                    filler filler filler filler
                    filler filler filler filler
                    filler filler filler filler
                    filler filler filler filler
                    filler filler filler filler
                    filler filler filler filler
                    filler filler filler filler"
                    label="Rock, Paper, Scissors!"
                    path="/"
                    />
                     <CardFactory
                    src={gengarImg}
                    text="
                    filler filler filler filler
                    filler filler filler filler
                    filler filler filler filler
                    filler filler filler filler
                    filler filler filler filler
                    filler filler filler filler
                    filler filler filler filler"
                    label="Weather App"
                    path="/"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;