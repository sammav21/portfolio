import './App.css';
import MEDIA from './images/media';
import {useRef} from 'react';
import {About, Contact, Experiences, Header, Landing, Projects} from './Components/Components'


function App() {

  const experiencesRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <div className="App">
      <img src={MEDIA.colorBlob} className="colorBlob" alt="Background Graphic" />
      <div className='main'>
          <Header experiencesRef={experiencesRef} projectsRef={projectsRef} aboutRef={aboutRef}/>
          <Landing/>
          <Experiences experiencesRef={experiencesRef}/>
          <Projects projectsRef={projectsRef}/>
          <About aboutRef={aboutRef}/>
          <Contact />
      </div>
    </div>
  );
}

export default App;
