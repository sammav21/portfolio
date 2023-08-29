import './App.css';
import MEDIA from './images/media';
import {useRef, useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {About, Contact, Experiences, Header, Landing, Projects} from './Components/Components'


function App() {
  const [toTopButton, setToTopButton] = useState(false);

  const handleVisibleButton = () => {
    setToTopButton(window.pageYOffset > 75)
  }
  const handleScroll = () => {
    window.scrollTo({top: 0, behavior: "smooth" });
  }
  const variants = {
    hidden: {
      opacity: 0,
      x: 200,
      scale: 0
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: .5,
        ease: 'linear'
      }
    },
    exit: {
      opacity: 0,
      x: 200,
      scale: 0,
      transition: {
        duration: .5,
        ease: 'linear'
      }
    },
    whileHover: {
        scale: 1.1,
        transition: { 
          duration: .2
        },
    }
  }
  const mainRef = useRef(null);
  const experiencesRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton);
    console.log(toTopButton);
  }, [])

  return (
    <div className="App">
      <img src={MEDIA.colorBlob} className="colorBlob" alt="Background Graphic" />
      
          
      <div className='main' ref={mainRef}>
          <Header experiencesRef={experiencesRef} projectsRef={projectsRef} aboutRef={aboutRef} contactRef={contactRef}/>
          <Landing/>
          <Experiences experiencesRef={experiencesRef} mainRef={mainRef}/>
          <Projects projectsRef={projectsRef} mainRef={mainRef}/>
          <About aboutRef={aboutRef} mainRef={mainRef}/>
          <Contact contactRef={contactRef} mainRef={mainRef}/>
      </div>
      <AnimatePresence>
      {toTopButton && <motion.button className='showToTop' onClick={handleScroll} variants={variants} initial='hidden' animate='visible' exit='exit' whileHover='whileHover'>
        <span className="material-symbols-outlined">north</span>
</motion.button>}
      
      </AnimatePresence>
    </div>
  );
}

export default App;
