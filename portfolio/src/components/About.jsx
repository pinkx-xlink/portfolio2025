import React from 'react';

import { Logos } from './Logos';

export const About = () => {
  return (
    <div className='about-me-container'>
      <p className='about-me_h2'> 
        {'<'} full-stack web dev {'>'}
      </p>
      <p className='about-me_text'>
        Hi, I'm Shaiyan! Full-time artist, cat-mom, reader, fashion designer, seamstress... oh yeah, and sometimes a programmer. 
        <br/>
        <br/>
        I love creating unique, eye-catching, and user-friendly
        apps that are memorable and easy to navigate. I'm also passionate
        about game development and animation.

        In my free time, I create new apps from my own
        imagination and follow tutorials and courses
        to expand my horizons and learn more advanced coding methods.
        
        <br/>
        <br/>
        I'm currently seeking opportunities where I can put
        to use and refine my current web development skills,
        as well as add new tools to my kit.
        <br/>
        <br/>
        5 years from now, I see myself in a flexible ever-evolving
        full-stack web developer role that will allow me
        to work on a wide range of exciting projects, from creating the latest hottest
        social media app, to implementing physics for the next Elder Scrolls game.
        <br/>
        <br/>
        My skills include:
        <br/>
        <p className='skills'>˖ꕥ HTML ꕥ JS ꕥ CSS ꕥ Node.js ꕥ React ꕥ Power BI ꕥ SQL ꕥ˖</p>
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
