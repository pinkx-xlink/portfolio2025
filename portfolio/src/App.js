import './App.css';

import Header from './components/Header';
import { Logos } from './components/Logos';
import { About } from './components/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <About />
        <Logos />
        
      </header>
    </div>
  );
}

export default App;
