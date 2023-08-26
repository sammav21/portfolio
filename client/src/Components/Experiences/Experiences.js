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
        offset: ['start end', 'end end', 'end start']
    });
  
    const opacity = useTransform(scrollYProgress, [0, .4, .8, 1], [0, 1, 1, 0]);
    const x = useTransform(scrollYProgress, [0, .5], [300, 0] );

    return(
    <div ref={props.experiencesRef} className="experiences">
    <motion.section style={{opacity, x}} ref={targetRef}>
        <h2 className="sectionTitle">EXPERIENCES</h2>
        <div className="experiencesContent">
            <Card title={"Gonna have a quick look"} id={"firstCardGraphic"} imageContent={<div id="typewriterWrapper">
            <p>&lt;</p>
            <p id="typewriterText">Hello, World!</p><div id="cursor"></div></div>} experience={"Harvard CS50"} text={"A comprehensive introduction to computer science and programming, encompassing topics from foundational algorithms and data structures to web development"} tech={cardOne}/>
            <Card title={"Just a few more minutes"} id={"secondCardGraphic"} imageContent={<img src={MEDIA.secondCardImage} id="reactImage"/>}experience={"Scrimba"} text={"An in depth exploration of React, from the fundamental concepts of components, props, and state, to more advanced topics like hooks, context, and testing."} tech={cardTwo}/>
            <Card title={"Job?"} id={"secondCardGraphic"} imageContent={<img src={MEDIA.thirdCardImage} id="javaImage"/>} experience={"Genesis10: DEV10"} text={"Having proved my front end capabilities, I accepted my first job as a Java Associate which involved rigorous training on OOP, databases, testing, security and software design rules"} tech={cardThree}/>
        </div>
    </motion.section>
    </div>
    )
}