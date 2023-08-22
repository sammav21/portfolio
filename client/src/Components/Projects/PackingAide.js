import {useState} from 'react';

export default function PackingAide(){

    const [openProject, setOpenProject] = useState(false);
   
    return(
        <li className="projectTitleContainer" id="packingAideContainer">
            <h3 className="projectTitle" id="packingAideTitle" onClick={() => setOpenProject(!openProject)}>PACKING AIDE</h3>
            {openProject && 
            <div className="openProject">
                <div className="infoBar">
                    <p>full stack</p>
                    <p>|</p>
                    <p>view code</p>
                    <p>|</p>
                    <p>watch presentation</p>
                </div>
                <div className="infoContainer">
                    <div className="description">
                        <div className="descriptionText">
                        Packing Aide is a comprehensive solution aimed at simplifying the packing process for various occasions. The project allows users to effortlessly manage their packing needs for travel or important events. Packing Aide is a project I completed with two other team members as part of the Dev10 capstone assignment.
                        </div>
                        <div className="techStack">
                            Tech Stack: MySQL, Java, Spring Boot, React JS, AWS, Open Street Map
                        </div>
                    </div>
                    <div className="media">
                        <div className="image"></div>
                    </div>
                </div>
            </div>
            }
            
        </li>  
    )
}