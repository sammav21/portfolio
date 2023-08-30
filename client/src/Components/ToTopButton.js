import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';

export default function ToTopButton(){

    const [toTopButton, setToTopButton] = useState(false);
    const handleVisibleButton = () => {
        setToTopButton(window.pageYOffset > 75)
    }
    const handleScroll = () => {
        window.scrollTo({top: 0, behavior: "smooth" });
    }
    const btnVariants = {
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
      };

    useEffect(() => {
        window.addEventListener('scroll', handleVisibleButton);
      }, []);

    return(
    <AnimatePresence>
      {toTopButton && 
      <motion.button className='toTopBtn' onClick={handleScroll} variants={btnVariants} initial='hidden' animate='visible' exit='exit' whileHover='whileHover'>
        <span className="material-symbols-outlined arrow">north</span>
        </motion.button>
      }
    </AnimatePresence>
    )
}