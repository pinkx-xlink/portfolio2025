import React from 'react'

import { animate, stagger, text } from 'animejs';

const { chars } = text.split('h2', { words: false, chars: true });

animate(chars, {
  // Property keyframes
  y: [
    { to: '-2.75rem', ease: 'outExpo', duration: 600 },
    { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
  ],
  // Property specific parameters
  rotate: {
    from: '-1turn',
    delay: 0
  },
  delay: stagger(50),
  ease: 'inOutCirc',
  loopDelay: 1000,
  loop: true
});

const Header = () => {
  return (
    <div className='homepage__header-container'>
        <p className='header__hi'><b><i>hi!</i></b></p>
        <span className='homepage__header-container_greeting'> 
            <p>I'm</p>
            <h1 className='full-name'>Shaiyan Younkin</h1>
        </span>

        <div className="large grid centered square-grid">
          <h2 className="text-xl">HELLO WORLD</h2>
        </div>
    </div>
  )
}

export default Header