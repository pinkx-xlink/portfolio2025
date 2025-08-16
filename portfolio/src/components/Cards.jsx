import React from 'react'
import CardFactory from './CardFactory';
import './Cards.css'

function Cards() {
  return (
    <div className="cards">
        <h2>PROJECTS</h2>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardFactory 
                    src="./img/gengar.png"
                    text="Project 1"
                    label="PROJECT"
                    path="/"
                    />
                     <CardFactory
                    src="./img/gengar.png"
                    text=""
                    label="Adventure"
                    path="/"
                    />
                </ul>
                {/* copy and paste card component */}
                <ul className="cards__items">
                    <CardFactory 
                    src="./img/gengar.png"
                    text="Travel through the Islands of Balie in a Private Cruise"
                    label="Luxury"
                    path="/"
                    />
                     <CardFactory 
                    src="./img/gengar.png"
                    text="Travel through the Islands of Balie in a Private Cruise"
                    label="Luxury"
                    path="/"
                    />
                     <CardFactory
                    src="./img/gengar.png"
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