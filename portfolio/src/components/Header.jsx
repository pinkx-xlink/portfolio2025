import React from 'react'

const Header = () => {
  return (
    <div className='homepage__header-container'>
      <div className="large grid centered square-grid">
          <h2 className="text-xl" id='header__hi'>Hello, world!</h2>
        </div>
        
        <span className='homepage__header-container_greeting'> 
            <p>I'm</p>
            <h1 className='full-name'>Shaiyan Younkin</h1>
        </span>
    </div>
  )
}

export default Header