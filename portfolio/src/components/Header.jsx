import React from 'react'

const Header = () => {
  return (
    <div className='homepage__header-container'>
      <div>
          <h2 className="header__hi">Hello, world!</h2>
        </div>
        
        <span className='homepage__header-container_greeting'> 
            I'm
            <h1 className='full-name'>Shaiyan Younkin</h1>
        </span>
    </div>
  )
}

export default Header