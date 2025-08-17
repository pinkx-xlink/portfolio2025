import React from 'react';
import './NeonLights.css';

export const HelloWorld = () => {
  return (
    <>
        <div className='neon-signs-container'>
        <div className='hello-world' contenteditable spellcheck="false">Hello, <br/>World</div>
        <div className='neon-sign__i-am'>
                <span>I'm</span>
                <span> </span>
                <span> </span>
                <span> </span>
                <div class="scroll-more">↓</div>
        </div>
        </div>
    </>
  
  )
}
