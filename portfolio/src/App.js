import './App.css';

import Header from './components/Header';
import { Logos } from './components/Logos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Logos />
        
      </header>
    </div>
  );
}

export default App;
