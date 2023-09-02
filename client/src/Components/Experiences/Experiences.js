import Card from "./Card";
import MEDIA from "../../images/media.js";
import {useRef} from 'react';
import {motion, useScroll, useSpring, useTransform, easeIn} from 'framer-motion';
import {LazyLoadImage} from 'react-lazy-load-image-component';

export default function Experiences({experiencesRef}){

    const cardOne = ['git', 'c', 'html', 'css', 'js', 'sql'];
    const cardTwo = ['react'];
    const cardThree = ['java', 'junit', 'mysql', 'spring'];

    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ['start end', 'start start', 'end start'],
    });
    
    const smoothScroll = useSpring(scrollYProgress, { stiffness: 1000, damping: 100, mass: .1 })

    const opacity = useTransform(smoothScroll, [0, .25, .5, .8, 1], [0, 0.5, 1, 1, 0],  {ease: easeIn} );
    const x = useTransform(smoothScroll, [0, .25, .5, .85, 1], ['50%', '0%', '0%', '0%', '-50%'],  {ease: easeIn} );

    return(
    <div ref={experiencesRef} className="experiences">
        <motion.section ref={targetRef} style={{x, opacity}}>
            <div className="w100 flex justify-c">
        <h2 className="sectionTitle">EXPERIENCES</h2>
        </div>
        <div className="experiencesContent w100 flex">
            <Card title={"Gonna have a quick look"} id={"firstCardGraphic"} imageContent={<div className='flex' id="typewriterWrapper">
            <p>&lt;</p>
            <p id="typewriterText">Hello, World!</p><div id="cursor"></div></div>} experience={"Harvard CS50"} text={"A comprehensive introduction to computer science and programming, encompassing topics from foundational algorithms and data structures to web development"} tech={cardOne}/>
            <Card 
            title={"Just a few more minutes"} 
            id={"secondCardGraphic"} 
            imageContent={<LazyLoadImage 
                            src={MEDIA.secondCardImage} 
                            className='w100'
                            id="reactImage" 
                            alt='graphic of open laptop on which a  man smaller than screen attempts to hang a rectangular component onto the page'/>}
            experience={"Scrimba"} 
            text={"An in depth exploration of React, from the fundamental concepts of components, props, and state, to more advanced topics like hooks, context, and testing."} 
            tech={cardTwo}/>
            <Card 
            title={"Job?"} 
            id={"secondCardGraphic"} 
            imageContent={<LazyLoadImage 
                            src={MEDIA.thirdCardImage} 
                            className='h100'
                            id="javaImage" 
                            alt='Desktop with gear on the screen inside of which is written "API". Surrounding the desktop are various browser tabs and a database server'/>} 
            experience={"Genesis10: DEV10"} 
            text={"A professional introduction to back end development, I accepted a role as a Java Associate which involved rigorous training on OOP, databases, testing, security and software design principles"} 
            tech={cardThree}/>
        </div>
        </motion.section>
    </div>
    )
}