import MEDIA from "../../images/media";
import {motion, useScroll, useTransform} from 'framer-motion';
import { useRef } from "react";

export default function About(props){

    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ['start end', 'start start', 'end start']
    });

    const opacity = useTransform(scrollYProgress, [0, .25, .45, .8, 1], [0, 0, 1, 1, 0]);
    const x = useTransform(scrollYProgress, [0, .5, 1], [800, 0, -800]);
    const xReverse = useTransform(scrollYProgress, [0, .5, 1], [-800, 0, 800]);

    return(
    <div ref={props.aboutRef} className="about">
    <motion.section ref={targetRef} style={{opacity}}>
    <div className="sectionTitleWrapper">
        <motion.h2 ref={targetRef} style={{x}} className="sectionTitle">ABOUT</motion.h2>
    </div>
        <motion.div className="aboutContent" style={{x: xReverse}}>
            <img src={MEDIA.headshot} className='headshot' />
            <p className='aboutMeText'>Hey. I'm Sam. A full stack developer from the Bronx.<br /> 
            <br /> 
            I like scouring the internet to learn new skills like photography, video editing and sound design. So it's no surprise I went down the rabbit hole when a friend suggested I look into the world of coding. I enjoy the creation process from initial concept to completion, and I take pride in bringing an idea to life. Building front end projects and gaining professional back end training along the way, my coding toolkit now spans the spectrum of software development.
            <br/>
            <br /> 
            When I'm not coding, you can find me out of breath on my bike (I said I'd take it easy next time), pretending I'm still good at video games, or watching movies with my wife Jen followed by an hour of showing eachother our favorite Letterboxd reviews.
            <br /> 
            <br /> 
            Here are some useful links: 
            <a className='aboutLink' id='resume' href='https://drive.google.com/file/d/1f1pUTAEXoQ0aqZSizgNw3M9b7wn7jrFn/view?usp=sharing' target="_blank" rel="noopener noreferrer">Resume</a>
            <a className='aboutLink' id='github' href='https://github.com/sammav21' target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className='aboutLink' id='linkedin' href='https://www.linkedin.com/in/samuel-avil%C3%A9s-a8398b93/' target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
        </motion.div>
    </motion.section>
    </div>
    )
}