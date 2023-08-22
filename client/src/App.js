import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
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
      <Contact />
    </div>
  );
}

export default App;
