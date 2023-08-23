import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Experiences from './Components/Experiences/Experiences';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import Projects from './Components/Projects/Projects';
import colorBlob from "./images/colorBlob.png";
import {useRef} from 'react';

function App() {

  const experiencesRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <div className="App">
      <img src={colorBlob} className="colorBlob" alt="Background Graphic" />
      <div className='main'>
      <Header experiencesRef={experiencesRef} projectsRef={projectsRef} aboutRef={aboutRef}/>
      <Landing />
      <Experiences experiencesRef={experiencesRef}/>
      <Projects projectsRef={projectsRef}/>
      <About aboutRef={aboutRef}/>
      <Contact />
      </div>
    </div>
  );
}

export default App;
