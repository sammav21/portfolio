import GoalStrive from "./GoalStrive";
import PackingAide from "./PackingAide";
import Photography from "./Photography";
import Quizzical from "./Quizzical";
import YoBurger from "./YoBurger";

export default function Projects(){

    return(
    <div className="projects">
        <h2 className="sectionTitle">PROJECTS</h2>
        <ul className="projectList">
            <PackingAide />            
            <GoalStrive />
            <Photography />
            <YoBurger />
            <Quizzical />
        </ul>
    </div>
    )
}