import './App.css';
import {useEffect, useRef, useState} from 'react';
import {About, Contact, Experiences, Header, Landing, Projects, ToTopButton, Background} from './Components/Components'


function App() {

  const [loading, setLoading] = useState(true);

  const handleLoading = () => {
    setLoading(false);
  }
  const experiencesRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

useEffect(() => {
  window.addEventListener("load", handleLoading)
  return() => window.removeEventListener("load", handleLoading);
}, [])

  return (
    <div className="App w100">
      <Background />
      {loading 
      ? <div className='loader w100 flex align-c justify-c'>loading up...</div>  
      : 
      <div className='main w100 flex column align-c'>
          
          <Header experiencesRef={experiencesRef} projectsRef={projectsRef} aboutRef={aboutRef} contactRef={contactRef}/>
          <Landing/>
          <Experiences experiencesRef={experiencesRef}/>
          <Projects projectsRef={projectsRef}/>
          <About aboutRef={aboutRef}/>
          <Contact contactRef={contactRef}/>
      </div>
      }
       <ToTopButton />
      </div>
    
      
  );
}

export default App;
