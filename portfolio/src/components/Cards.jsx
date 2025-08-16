import React from 'react'
import CardFactory from './CardFactory';
// import './Cards.css'


function Cards() {
  return (
    <div className="cards">
        <h1>Check out these epic destinations!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardFactory 
                    src="./img/gengar.png"
                    text="Project 1"
                    label="PROJECT"
                    path="/services"
                    />
                     <CardFactory
                    src="./img/gengar.png"
                    text=""
                    label="Adventure"
                    path="/services"
                    />
                </ul>
                {/* copy and paste card component */}
                <ul className="cards__items">
                    <CardFactory 
                    src="./img/gengar.png"
                    text="Travel through the Islands of Balie in a Private Cruise"
                    label="Luxury"
                    path="/services"
                    />
                     <CardFactory 
                    src="./img/gengar.png"
                    text="Travel through the Islands of Balie in a Private Cruise"
                    label="Luxury"
                    path="/services"
                    />
                     <CardFactory
                    src="./img/gengar.png"
                    text="Travel through the Islands of Balie in a Private Cruise"
                    label="Luxury"
                    path="/services"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;