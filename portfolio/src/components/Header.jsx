import React from 'react';
import { HelloWorld } from './HelloWorld';
import AnimatedGreeting from './AnimatedGreeting';
import gengar from './img/gengar.png'
const Header = () => {
  return (
    <div className='header-content-container'>
      <div className='neon-signs-container'>
        <HelloWorld />
        <AnimatedGreeting />
      </div>
      <img src={gengar} className='header-image'/>
    </div>
    
    
    
  )
}

export default Header