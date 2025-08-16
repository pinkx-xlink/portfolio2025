import './App.css';
import Header from './components/Header';
import { Logos } from './components/Logos';
import { About } from './components/About';
import { MyLinks } from './components/MyLinks';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-body">
        
        <MyLinks />

        <About />
        <Logos />

      </header>
    </div>
  );
}

export default App;
