import Card from "./Card";

export default function Experiences(){

    const cardOne = ['git', 'c', 'html', 'css', 'js', 'sql'];
    const cardTwo = ['react'];
    const cardThree = ['java', 'junit', 'mysql', 'spring'];

    
    return(
    <div className="experiences">
        <h2 className="sectionTitle">EXPERIENCES</h2>
        <div className="experiencesContent">
            <Card title={"Gonna have a quick look"} experience={"Harvard CS50"} text={"A comprehensive introduction to computer science and programming, encompassing topics from foundational algorithms and data structures to web development"} tech={cardOne}/>
            <Card title={"Just a few more minutes"} experience={"Scrimba"} text={"An in depth exploration of React, from the fundamental concepts of components, props, and state, to more advanced topics like hooks, context, and testing."} tech={cardTwo}/>
            <Card title={"Job?"} experience={"Genesis10: DEV10"} text={"Having proved my front end capabilities, I accepted my first job as a Java Associate which involved rigorous training on OOP, databases, testing, security and software design rules"} tech={cardThree}/>
        </div>
    </div>
    )
}