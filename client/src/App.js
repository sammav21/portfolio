import './App.css';
import About from './Components/About/About';
import Experiences from './Components/Experiences/Experiences';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Experiences />
      <Projects />
      <About />
    </div>
  );
}

export default App;
