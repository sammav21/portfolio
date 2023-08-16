import GoalStrive from "./GoalStrive";
import PackingAide from "./PackingAide";
import Photography from "./Photography";
import YoBurger from "./YoBurger";

export default function Projects(){

    return(
    <div className="projects">
        <h2 className="sectionTitle">PROJECTS</h2>
        <ul className="projectList">
            {/*items likely need to be unique components each to hold data about that project. Potential to make one reusable but considering all the extra media it may be a lot of if/else cases*/}
            {/*Do I list each item in the font/color scheme from there sites? Perhaps look like the top of "folders" which open downward when clicked?*/}  
            <PackingAide />            
            <GoalStrive />
            <Photography />
            <YoBurger />
            <li className="projectTitle">Quizlet</li>
        </ul>
    </div>
    )
}