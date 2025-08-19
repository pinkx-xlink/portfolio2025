import React from 'react'

import githubLogo from './logos/GitHub-Logo.png';
import linkedinLogo from './logos/linkedin-logo.webp';

export const MyLinks = () => {
  return (
    <div className='my-links-container'>
      <div className='my-link'>
          <a 
          href="https://github.com/pinkx-xlink" 
          target="_blank"
          className="my-links">
          Github
          </a>
           <img src={githubLogo} className='my-links__logos'></img>
      </div>

      <div className='my-link'>
        <a 
        href="https://www.linkedin.com/in/shaiyan-younkin-916633271/" 
        target="_blank"
        className="my-links">
        LinkedIn
        </a>
        <img src={linkedinLogo} className='my-links__logos'></img>
      </div>
        
    </div>
  )
}
