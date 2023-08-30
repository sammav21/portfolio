import {motion} from 'framer-motion';

export default function Landing(){
    const title = Array.from("Samuel Avilés");
    const subtext=Array.from("Full Stack Developer");

    const container= {
        hidden: {
            opacity: 1
        },
        visible: {
            opacity: 1, 
            transition: {
                duration: 2,
                staggerChildren: .07
           }}
        };
    const letters= {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: 'linear'
            }
        }
    };
    return(
    <section className="landing" >
        <div className="landingContentWrapper" >
            <motion.div className='landingContent' variants={container} initial='hidden' animate='visible'>
            {title.map((letter, i) => (
                <motion.h1 key={i} className="name" variants={letters}>{letter}</motion.h1>
            ))}
            </motion.div>
            <motion.h1 className='landingContent' variants={container} initial='hidden' animate='visible'>
            {subtext.map((letter, i) => (
                <motion.span key={i} className="subtext" variants={letters}>{letter}</motion.span>
            ))}
            </motion.h1>
        </div>
    </section>
    )
}