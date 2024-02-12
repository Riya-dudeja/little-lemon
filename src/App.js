import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import {Specials} from './components/Specials.js';
import About from './components/About.js';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Specials />
      <About />
    </>
  );
}

export default App;
