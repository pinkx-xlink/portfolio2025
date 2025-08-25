import React from 'react';

import { Logos } from './Logos';

export const About = () => {
  return (
    <div className='about-me-container'>
      <p className='about-me_h2'> {'<'} web dev {'>'}</p>
      <p className='about-me_text'>
        Where art meets technology

        <br/>
        <br/>
        <br/>

        <div className='Logos-container'>
          <Logos />
        </div>
      </p>
      
    </div>
  )
}
