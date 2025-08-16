import './App.css';

import { animate, createScope, createSpring, createDraggable } from 'animejs';
import { useEffect, useRef, useState } from 'react';

import Header from './components/Header';
import { Logos } from './components/Logos';
import { About } from './components/About';
import { MyLinks } from './components/MyLinks';
import TextBlock from './components/TextBlock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='app-header-container'>
          <Header />
          <MyLinks />
        </div>

        <About />
        <Logos />
        
        <TextBlock />

      </header>
    </div>
  );
}

export default App;
