import React from 'react'
import CardFactory from './CardFactory';
import './Cards.css'

import gengarImg from './img/gengar.png';

import pokemonGameScreenshot from './projectScreenshots/pokemonStyleGame.jpeg';
import googleCloneScreenshot from './projectScreenshots/googleClone.jpeg';
import minecraftSiteScreenshot from './projectScreenshots/minecraft-site-screenshot.jpeg';
import rockPaperScissorsScreenshot from './projectScreenshots/rock-paper-scissors-screenshot.jpeg';

function Cards() {
  return (
    <div className="cards">
        <h2>Check out some of my projects</h2>
        <p>Where art and tech intersect</p>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <a href='https://pokemonstylegame.netlify.app/' target='_blank'>
                        <CardFactory 
                        src={pokemonGameScreenshot}
                        text="
                        Made using HTML, canvas, JavaScript, and CSS.
                        A 2D Pokemon-style game made using 
                        sprites, animation, and a Tile map. 
                        Enjoy the nostalgic music, map 
                        exploration, and battling monsters...
                        and more to come. 
                        "
                        label="Pokemon Style 2d Game - DEMO"
                        // path="/"
                        />
                    </a>

                    <a href='https://shaiyans-google-clone.netlify.app/' target='_blank'>
                        <CardFactory
                        src={googleCloneScreenshot}
                        text="
                        Don't try fact-checking with this app--
                        it's not the real Google! This is a clone
                        made using CSS and HTML.
                        "
                        label="Google Clone"
                        path="/"
                        />
                    </a>
                </ul>

                {/* copy and paste card component */}
                <ul className="cards__items">
                    <a href='https://minecraft-getaway-resort.netlify.app/' target='_blank'>
                        <CardFactory 
                        src={minecraftSiteScreenshot}
                        text="
                        I made this app for the 2025 MLH Cloud Week Hackathon.
                        The challenge was to build a static site using HTML and CSS
                        in one week. The challenge was to learn something new, 
                        so I spent the week learning about Figma, making sites 
                        more responsive, and implimenting music, slideshows, 
                        and animations.
                        "
                        label="Minecraft Vacation - Faux Getaway Resort Website"
                        path="/"
                        />
                    </a>

                    <a href='https://shaiyans-rock-paper-scissors-app.netlify.app/' target='_blank'>
                        <CardFactory 
                        src={rockPaperScissorsScreenshot}
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
                    </a>

                    <a href=''>
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
                    </a>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;