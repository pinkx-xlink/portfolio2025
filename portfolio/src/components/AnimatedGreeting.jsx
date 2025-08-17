import React from 'react'

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
            <p 
            className="entrance-animation" 
            id="hello-world">
            Hello, world!
            </p>
            <p>
            I'm
            </p>
            <h1 className="entrance-animation">Shaiyan Younkin</h1>
          </div>
          
          
      </div>
    </>
  )
}

export default AnimatedGreeting