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
            <p class="entrance-animation" id="hello-world">Hello, world!</p>
          </div>
          
          <span className='homepage__header-container_greeting'> 
              I'm
              <p class = "entrance-animation" id='full-name'>Shaiyan Younkin</p>
          </span>
      </div>
    </>
  )
}

export default AnimatedGreeting