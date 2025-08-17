import React from 'react'
import CardFactory from './CardFactory';
import './Cards.css'

import gengarImg from './img/gengar.png'

function Cards() {
  return (
    <div className="cards">
        <h2>Check out some of my projects</h2>
        <p>Where art and tech intersect</p>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardFactory 
                    src={gengarImg}
                    text="Project 1"
                    label="PROJECT"
                    // path="/"
                    />
                     <CardFactory
                    src={gengarImg}
                    text=""
                    label="Adventure"
                    path="/"
                    />
                </ul>
                {/* copy and paste card component */}
                <ul className="cards__items">
                    <CardFactory 
                    src={gengarImg}
                    text="Travel through the Islands of Balie in a Private Cruise"
                    label="Luxury"
                    path="/"
                    />
                     <CardFactory 
                    src={gengarImg}
                    text="Travel through the Islands of Balie in a Private Cruise"
                    label="Luxury"
                    path="/"
                    />
                     <CardFactory
                    src={gengarImg}
                    text="Travel through the Islands of Balie in a Private Cruise"
                    label="Luxury"
                    path="/"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;