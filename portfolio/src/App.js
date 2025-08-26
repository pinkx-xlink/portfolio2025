import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';

import Header from './components/Header';
import { About } from './components/About';
import { MyLinks } from './components/MyLinks';
import Cards from './components/Cards';
import { Footer } from './components/Footer';
import PowerBIProject from './components/PowerBIProject/PowerBIProject';


function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-body">
      
        <div className='app-body-container'>
          <div className='app-body-container__sidebar'>
            {/* <MyLinks /> */}
            
          </div>
          <div className='app-body-container__main-content'>
             
             <About />
             <Cards />
          </div>
          
        </div>
      
      </header>
      <Footer />
    </div>
  );
}

export default App;
