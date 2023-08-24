import {useState} from 'react';
import MEDIA from '../../images/media';
import Video from './Video';

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
                    <a href='https://github.com/DavidVDeaton/packing-aide' target="_blank" rel="noopener noreferrer">view code</a>
                    <a>|</a>
                    <a href='https://www.youtube.com/watch?v=bX3OQgxak7s' target="_blank" rel="noopener noreferrer">watch presentation</a>
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
                        <Video direction='video left' url={MEDIA.packingLanding}/>
                        <Video direction='video right' url={MEDIA.packingAdd}/>
                        <Video direction='video left' url={MEDIA.packingEdit}/>
                        <Video direction='video right' url={MEDIA.packingUpdateContainer}/>
                        <Video direction='video left' url={MEDIA.packingSearch}/>
                    </div>
                </div>
            </div>
            }
            
        </li>  
    )
}