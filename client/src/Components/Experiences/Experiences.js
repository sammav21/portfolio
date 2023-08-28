import Card from "./Card";
import MEDIA from "../../images/media.js";
import {useRef} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';

export default function Experiences(props){

    const cardOne = ['git', 'c', 'html', 'css', 'js', 'sql'];
    const cardTwo = ['react'];
    const cardThree = ['java', 'junit', 'mysql', 'spring'];

    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ['start end', 'start start', 'end start']
    });

    const opacity = useTransform(scrollYProgress, [0, .25, .5, .8, 1], [0, 0, 1, 1, 0]);
    const x = useTransform(scrollYProgress, [0, .5, 1], [800, 0, -800]);
    const xReverse = useTransform(scrollYProgress, [0, .5, 1], [-800, 0, 800]);

    return(
    <div ref={props.experiencesRef} className="experiences">
        <motion.section ref={targetRef} style={{opacity}}>
            <div className="sectionTitleWrapper">
        <motion.h2 ref={targetRef} style={{x}} className="sectionTitle">EXPERIENCES</motion.h2>
        </div>
        <motion.div className="experiencesContent" ref={targetRef} style={{x: xReverse}} >
            <Card title={"Gonna have a quick look"} id={"firstCardGraphic"} imageContent={<div id="typewriterWrapper">
            <p>&lt;</p>
            <p id="typewriterText">Hello, World!</p><div id="cursor"></div></div>} experience={"Harvard CS50"} text={"A comprehensive introduction to computer science and programming, encompassing topics from foundational algorithms and data structures to web development"} tech={cardOne}/>
            <Card title={"Just a few more minutes"} id={"secondCardGraphic"} imageContent={<img src={MEDIA.secondCardImage} id="reactImage"/>}experience={"Scrimba"} text={"An in depth exploration of React, from the fundamental concepts of components, props, and state, to more advanced topics like hooks, context, and testing."} tech={cardTwo}/>
            <Card title={"Job?"} id={"secondCardGraphic"} imageContent={<img src={MEDIA.thirdCardImage} id="javaImage"/>} experience={"Genesis10: DEV10"} text={"Having proved my front end capabilities, I accepted my first job as a Java Associate which involved rigorous training on OOP, databases, testing, security and software design rules"} tech={cardThree}/>
        </motion.div>
        </motion.section>
    </div>
    )
}