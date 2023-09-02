import MEDIA from "../../images/media";
import {motion, useScroll, useSpring, useTransform, easeIn} from 'framer-motion';
import { useRef } from "react";

export default function About({aboutRef}){

    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ['start end', 'start start', 'end start']
    });

    const smoothScroll = useSpring(scrollYProgress, { stiffness: 1000, damping: 100, mass: .1 })

    const opacity = useTransform(smoothScroll, [0, .25, .50, .75, 1], [0, 0, 1, 1, 0], {ease: easeIn});
    const x = useTransform(smoothScroll, [0, .35, .50, .85, 1], ['50%', '0%', '0%', '0%', '-50%'], {ease: easeIn} );

    return(
    <div ref={aboutRef} className="about">
    <motion.section ref={targetRef} style={{opacity, x}}>
    <div className="w100 flex justify-c">
        <h2 className="sectionTitle">ABOUT</h2>
    </div>
        <div className="aboutContent w100 flex align-c justify-c" >
            <img src={MEDIA.headshot} className='headshot' />
            <div className='aboutTextWrapper flex column'>
            <p className="aboutText" id="aboutP1">Hey. I'm Sam. A full stack developer from the Bronx.</p>
            <p className="aboutText" id="aboutP2">
            I like scouring the internet to learn things. It's where I picked up skills in photography, video editing and sound design. So it's no surprise I went down the rabbit hole when a friend suggested I look into the world of coding. I enjoy the creation process from initial concept to completion, and I take pride in bringing an idea to life. Building front end projects and gaining professional back end training along the way, my coding toolkit now spans the spectrum of software development.
            </p>
            <p className="aboutText" id="aboutP3">
            When I'm not coding, you can find me out of breath on my bike (I said I'd take it easy next time), pretending I'm still good at video games, or watching movies with my wife Jen followed by an hour of showing eachother our favorite Letterboxd reviews.
            </p>
            <p className="aboutText" id="aboutP4">
            Here are some useful links: 
            <a className='aboutLink' id='resume' href='https://drive.google.com/file/d/1f1pUTAEXoQ0aqZSizgNw3M9b7wn7jrFn/view?usp=sharing' target="_blank" rel="noopener noreferrer">Resume</a>
            <a className='aboutLink' id='github' href='https://github.com/sammav21' target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className='aboutLink' id='linkedin' href='https://www.linkedin.com/in/samuel-avil%C3%A9s-a8398b93/' target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
            </div>
        </div>
    </motion.section>
    </div>
    )
}