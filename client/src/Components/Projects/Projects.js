import { useRef } from 'react';
import {GoalStrive, PackingAide, Photography, Quizzical, YoBurger} from '../Components'
import { useScroll, useTransform, motion } from 'framer-motion';

export default function Projects(props){
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ['start end', 'start start', 'end end', 'end start']
    });
    const opacity = useTransform(scrollYProgress, [0, .25, .75, 1], [0, 1, 1, 0]);
    const x = useTransform(scrollYProgress, [0, .25, .75, 1], [800, 0, 0, -800]);
    const xReverse = useTransform(scrollYProgress, [0, .25, .75, 1], [-800, 0, 0, 800]);

    return(
    <div ref={props.projectsRef} className="projects">
    <motion.section  style={{opacity}} ref={targetRef}>
        <div className="sectionTitleWrapper">
        <motion.h2 ref={targetRef} style={{x}} className="sectionTitle">PROJECTS</motion.h2>
        </div>
        <motion.ul className="projectList" style={{x: xReverse}}>
            <PackingAide />            
            <GoalStrive />
            <Photography />
            <YoBurger />
            <Quizzical />
        </motion.ul>
    </motion.section>
    </div>
    )
}