import React from 'react'
import gengar from './img/gengar.png';

export const HeaderImage = () => {
  return (
    <>
      <div className='header-image-container'>
        <img src={gengar} className='header-image' alt="header image" height="60px"/>
      </div>
    </>
  )
}
