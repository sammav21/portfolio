import {motion} from 'framer-motion';
import { useState } from 'react';

export default function Header({experiencesRef, projectsRef, aboutRef, contactRef}){

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <div className={mobileMenuOpen ? 'mobileMenuWrapper' : undefined}>
            <span className="material-symbols-outlined" id='menuIcon' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>menu</span>
            <div className={mobileMenuOpen ? 'mobileMenu' : undefined}>
                <button className={mobileMenuOpen ? 'mobileNavBtn' : 'navBtn'} onClick={() => {handleScroll(experiencesRef.current)}}>experiences</button>
                <button className={mobileMenuOpen ? 'mobileNavBtn' : 'navBtn'} onClick={() => {handleScroll(projectsRef.current)}}>projects</button>
                <button className={mobileMenuOpen ? 'mobileNavBtn' : 'navBtn'}onClick={() => {handleScroll(aboutRef.current)}}>about</button>
                <button className={mobileMenuOpen ? 'mobileNavBtn' : 'navBtn'} onClick={() => {handleScroll(contactRef.current)}}>contact</button>
            </div>
        </div>
        </nav>
    </motion.header>
    )
}