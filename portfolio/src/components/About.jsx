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
        I love creating unique, eye-catching, and user-friendly
        apps that are memorable and easy to navigate. I'm also passionate
        about game development.
        <br/>
        <br/>
        In my free time, I love creating new apps from my own
        imagination, as well as following tutorials and courses
        to expand my horizons and learn more advanced methods.
        My skills include:
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
