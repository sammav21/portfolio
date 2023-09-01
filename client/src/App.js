import './App.css';
import {useRef} from 'react';
import {About, Contact, Experiences, Header, Landing, Projects, ToTopButton, Background} from './Components/Components'


function App() {

  const experiencesRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);


  return (
    <div className="App">
      {/* <Background /> */}
      <div className='main'>
          <Header experiencesRef={experiencesRef} projectsRef={projectsRef} aboutRef={aboutRef} contactRef={contactRef}/>
          <Landing/>
          <Experiences experiencesRef={experiencesRef}/>
          <Projects projectsRef={projectsRef}/>
          <About aboutRef={aboutRef}/>
          <Contact contactRef={contactRef}/>
      </div>
      <ToTopButton />
    </div>
  );
}

export default App;
