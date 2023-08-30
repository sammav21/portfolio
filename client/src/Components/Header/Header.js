import {motion} from 'framer-motion';

export default function Header({experiencesRef, projectsRef, aboutRef, contactRef}){

    const handleScroll = (ref) => {
        window.scrollTo({
          top: ref.offsetTop,
          left: 0,
          behavior: 'smooth',
        });
      };
    
    const variants= {
        hidden: {opacity: 0},
        visible: {opacity: 1, transition: {duration: 2, delay: 3}}
    }
    return(
    <motion.header variants={variants} initial='hidden' animate='visible'>
        <div className="logoWrapper">
            <p className='logo'>{`sa`}</p>
        </div>
        <nav>
            <button className='navButton' onClick={() => {handleScroll(experiencesRef.current)}}>experiences</button>
            <button className='navButton' onClick={() => {handleScroll(projectsRef.current)}}>projects</button>
            <button className='navButton' onClick={() => {handleScroll(aboutRef.current)}}>about</button>
            <button className='navButton' onClick={() => {handleScroll(contactRef.current)}}>contact</button>
        </nav>
    </motion.header>
    )
}