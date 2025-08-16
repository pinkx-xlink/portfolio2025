import React from 'react'
import reactLogo from './logos/react-logo.svg';
import javascriptLogo from './logos/javascript-logo.png';
import htmlLogo from './logos/html-logo.png'
import cssLogo from './logos/css-logo.png'
import nodeJsLogo from './logos/nodejs-logo.png';
import powerBiLogo from './logos/power-bi-logo.png';
import sqlLogo from './logos/sql-logo.png';

export const Logos = () => {
  return (
    <div className='logos-container'>
        <div className='logos-container__html-css-and-js-container'>
            <div>
                <img src={javascriptLogo} className="App-logo" alt="JavaScript logo" />
            </div>
            <div>
                <img src={htmlLogo} className="App-logo" alt="JavaScript logo" />
            </div>
            <div>
                <img src={cssLogo} className="App-logo" alt="JavaScript logo" />
            </div>
        </div>
        
        <div>
            <img src={reactLogo} className="animated-logo" alt="React logo" />
        </div>
        
        <div>
            <img src={powerBiLogo} className="App-logo" alt="JavaScript logo" />
        </div>
        <div>
            <img src={sqlLogo} className="App-logo" alt="JavaScript logo" />
        </div>

        <div>
            <img src={nodeJsLogo} className="App-logo" alt="JavaScript logo" />
        </div>
    </div>
  )
}
