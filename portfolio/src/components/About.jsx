import React from 'react';

import { Logos } from './Logos';

export const About = () => {
  return (
    <div className='about-me-container'>
      <p className='about-me_h2'> 
        {'<'} full-stack web dev {'>'}
      </p>
      <p className='about-me_text'>
        Hi, I'm Shaiyan! Full-time artist, cat-mom, reader, fashion designer, seamtress... oh yeah, and sometimes a programmer. 
        <br/>
        <br/>
        Here are some of my skills:
        <br/>
        <br/>
        HTML ✨ JS ✨ CSS ✨ Node.js ✨ React ✨ Power BI ✨ SQL
        <br/>
        <br/>
        <div className='Logos-container'>
          <Logos />
        </div>
        <br/>
      </p>
      
    </div>
  )
}
