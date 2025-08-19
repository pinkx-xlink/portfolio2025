import React from 'react'
import './NeonLights.css';

const AnimatedGreeting = () => {
  setTimeout(() => {
    let animate = document.querySelectorAll('.entrance-animation');
    
    animate.forEach(item => item.classList.add('active'));
    }
    ,1000);

  return (
    <>
      <div className='homepage__header-container'>
        <div>
            {/* <p>I'm</p> */}
            <h1 className="entrance-animation" id="header__animated-h1">I'm Shaiyan Younkin
              <p> web dev </p>
            </h1>
            
          </div>
      </div>
    </>
  )
}

export default AnimatedGreeting