import {motion} from 'framer-motion';
import { useState, memo } from 'react';

export default function Header({experiencesRef, projectsRef, aboutRef, contactRef}){

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleScroll = (ref) => {
        window.scrollTo({
          top: ref.offsetTop,
          left: 0,
          behavior: 'smooth',
        });
      };
 
    return(
    <motion.header className='flex align-c'initial={{filter: 'blur(10px)'}} animate={{filter: 'blur(0)', transition: {duration: 1.5, delay: 2}}}>
        <div className="logoWrapper">
            <p className='logo'>{`sa`}</p>
        </div>
        <nav>
        <div className={mobileMenuOpen ? 'mobileMenuWrapper flex column' : undefined}>
            <span className="material-symbols-outlined" id='menuIcon' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>menu</span>
            <div className={mobileMenuOpen ? 'mobileMenu' : undefined}>
                <button className={mobileMenuOpen ? 'mobileNavBtn w100' : 'navBtn'} onClick={() => {handleScroll(experiencesRef.current)}}>experiences</button>
                <button className={mobileMenuOpen ? 'mobileNavBtn w100' : 'navBtn'} onClick={() => {handleScroll(projectsRef.current)}}>projects</button>
                <button className={mobileMenuOpen ? 'mobileNavBtn w100' : 'navBtn'}onClick={() => {handleScroll(aboutRef.current)}}>about</button>
                <button className={mobileMenuOpen ? 'mobileNavBtn w100' : 'navBtn'} onClick={() => {handleScroll(contactRef.current)}}>contact</button>
            </div>
        </div>
        </nav>
    </motion.header>
    )
};