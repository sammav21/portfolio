export default function Projects(){
    return(
    <div className="projects">
        <h2 class="sectionTitle">PROJECTS</h2>
        <ul className="projectList">
            {/*items likely need to be unique components each to hold data about that project. Potential to make one reusable but considering all the extra media it may be a lot of if/else cases*/}
            {/*Do I list each item in the font/color scheme from there sites? Perhaps look like the top of "folders" which open downward when clicked?*/}  
            <li className="projectTitle">Packing-Aide</li>              
            <li className="projectTitle">GoalStrive</li>
            <li className="projectTitle">SamuelAvilésPhotography</li>
            <li className="projectTitle">Yo-Burger</li>
            <li className="projectTitle">Quizlet</li>
        </ul>
    </div>
    )
}