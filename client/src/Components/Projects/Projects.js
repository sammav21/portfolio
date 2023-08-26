import { useRef } from 'react';
import {GoalStrive, PackingAide, Photography, Quizzical, YoBurger} from '../Components'
import { useScroll, useTransform, motion } from 'framer-motion';

export default function Projects(props){
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ['start end', 'end end', 'end start']
    });
    const opacity = useTransform(scrollYProgress, [0, .4, .80, 1], [0, 1, 1, 0]);

    return(
    <div ref={props.projectsRef} className="projects">
    <motion.section  style={{opacity}} ref={targetRef}>
        <h2 className="sectionTitle">PROJECTS</h2>
        <ul className="projectList">
            <PackingAide />            
            <GoalStrive />
            <Photography />
            <YoBurger />
            <Quizzical />
        </ul>
    </motion.section>
    </div>
    )
}