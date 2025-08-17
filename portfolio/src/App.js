import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import Header from './components/Header';
import { Logos } from './components/Logos';
import { About } from './components/About';
import { MyLinks } from './components/MyLinks';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-body">
        

        <MyLinks />

        <About />
        <Logos />

        <Cards />
      </header>
    </div>
  );
}

export default App;
