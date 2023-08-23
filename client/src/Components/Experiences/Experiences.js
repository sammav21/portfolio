import Card from "./Card";
import reactImage from "../../images/Insert block-bro.png";
import javaImage from "../../images/Application programming interface-rafiki.png";
export default function Experiences(props){

    const cardOne = ['git', 'c', 'html', 'css', 'js', 'sql'];
    const cardTwo = ['react'];
    const cardThree = ['java', 'junit', 'mysql', 'spring'];

    
    return(
    <div className="experiences" ref={props.experiencesRef}>
        <h2 className="sectionTitle">EXPERIENCES</h2>
        <div className="experiencesContent">
            <Card title={"Gonna have a quick look"} id={"firstCardGraphic"} imageContent={<div id="typewriterWrapper">
            <p>&lt;</p>
            <p id="typewriterText">Hello, World!</p><div id="cursor"></div></div>} experience={"Harvard CS50"} text={"A comprehensive introduction to computer science and programming, encompassing topics from foundational algorithms and data structures to web development"} tech={cardOne}/>
            <Card title={"Just a few more minutes"} id={"secondCardGraphic"} imageContent={<img src={reactImage} id="reactImage"/>}experience={"Scrimba"} text={"An in depth exploration of React, from the fundamental concepts of components, props, and state, to more advanced topics like hooks, context, and testing."} tech={cardTwo}/>
            <Card title={"Job?"} id={"secondCardGraphic"} imageContent={<img src={javaImage} id="javaImage"/>} experience={"Genesis10: DEV10"} text={"Having proved my front end capabilities, I accepted my first job as a Java Associate which involved rigorous training on OOP, databases, testing, security and software design rules"} tech={cardThree}/>
        </div>
    </div>
    )
}