import React from 'react';

import { Logos } from './Logos';

export const About = () => {
  return (
    <div className='about-me-container'>
      <p className='about-me_h2'> {'<'} web dev {'>'}</p>
      <p className='about-me_text'>
        I'm a full-stack web developer with a particular passion
        for front-end development.
        <br/>
        <br/>
        HTML ✨ JS ✨ CSS ✨ Node.js ✨ React ✨ Power BI ✨ SQL
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
