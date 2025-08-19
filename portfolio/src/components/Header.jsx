import React from 'react';
import { HelloWorld } from './HelloWorld';
import AnimatedGreeting from './AnimatedGreeting';
import { HeaderImage } from './HeaderImage';


const Header = () => {
  return (
    <div className='header-content-container'>
      <div className='neon-signs-container'>
        <HelloWorld />
        <AnimatedGreeting />
      </div>
      <HeaderImage />
    </div>
    
    
    
  )
}

export default Header