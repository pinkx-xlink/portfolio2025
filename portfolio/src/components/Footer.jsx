import React from 'react'
import reactLogo from './logos/react-logo.svg';

import { MyLinks } from './MyLinks';

export const Footer = () => {
  return (
    <div className='footer-container'>
        <p>This portfolio is powered by React</p>
        <div>
            <img src={reactLogo} className="App-logo" id="animated-logo" alt="React logo" />
        </div>
        <p>
            <b>Wanna see behind-the-scenes?</b>
            Check out the repo for my portfolio here:
            <br/>
            <a 
            href="https://github.com/pinkx-xlink/portfolio2025" 
            target='_blank'
            id='repo-link'
            >Portfolio Repository</a>
        </p>
        <MyLinks />
    </div>
  )
}
