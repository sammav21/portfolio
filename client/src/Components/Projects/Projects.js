import { useRef } from 'react';
import {GoalStrive, PackingAide, Photography, Quizzical, YoBurger} from '../Components'
import {motion, useScroll, useSpring, useTransform, easeIn} from 'framer-motion';

export default function Projects({projectsRef}){
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ['start end', 'start start', 'end start']
    });
    const smoothScroll = useSpring(scrollYProgress, { stiffness: 1000, damping: 100, mass: .1 })

    const opacity = useTransform(smoothScroll, [0, .25, .50, .75, 1], [0, .5, 1, 1, 0], {ease: easeIn});
    const x = useTransform(smoothScroll, [0, .35, .50, .85, 1], ['-50%', '0%', '0%', '0%', '50%'], {ease: easeIn} );

    return(
    <div ref={projectsRef} className="projects">
    <motion.section  style={{opacity, x}} ref={targetRef}>
        <div className="w100 flex justify-c">
        <h2 className="sectionTitle">PROJECTS</h2>
        </div>
        <ul className="projectList flex column">
            <Photography />
            <PackingAide />  
            <YoBurger />
            <GoalStrive />
            <Quizzical />
        </ul>
    </motion.section>
    </div>
    )
}