import {useState} from 'react';
import MEDIA from '../../images/media';
import Video from './Video';
import {LazyLoadComponent} from 'react-lazy-load-image-component';

export default function PackingAide(){

    const [openProject, setOpenProject] = useState(false);
   
    return(
        <li className="projectTitleContainer w100 flex column" id="packingAideContainer">
            <h3 className={openProject ? "projectTitle w100 flex" : "projectTitle w100 flex closed"} id={openProject ? 'packingAideTitleOpen':"packingAideTitle"} onClick={() => setOpenProject(!openProject)}>PACKING AIDE</h3>
            {openProject && 
            <div className="openProject w100 flex align-c justify-c">
                <div className="infoSide flex column align-c justify-c">
                        <div className="descriptionText">
                        Packing Aide is a comprehensive solution aimed at simplifying the packing process for various occasions. The project allows users to effortlessly manage their packing needs for travel or important events. Packing Aide is a project I completed with two other team members as part of the Dev10 capstone assignment.
                        </div>
                        <div className="techStack w100">
                            Tech Stack: MySQL, Java, Spring Boot, React, AWS, Open Street Map
                        </div>
                </div>
                <div className="mediaSide h100 flex column">
                    <div className="infoBar w100 flex">
                        <p>full stack</p>
                        <p>|</p>
                        <a href='https://github.com/DavidVDeaton/packing-aide' className='projectLink' target="_blank" rel="noopener noreferrer">view code</a>
                        <p>|</p>
                        <a href='https://www.youtube.com/watch?v=bX3OQgxak7s' className='projectLink' target="_blank" rel="noopener noreferrer">watch presentation</a>
                    </div>
                    <LazyLoadComponent>
                    <div className="media w100 flex column align-c">
                        <Video direction='videoContainer left' url={MEDIA.packingLanding}/>
                        <Video direction='videoContainer right' url={MEDIA.packingEdit}/>
                        <Video direction='videoContainer left' url={MEDIA.packingAdd}/>
                        <Video direction='videoContainer right' url={MEDIA.packingUpdateContainer}/>
                        <Video direction='videoContainer left' url={MEDIA.packingSearch}/>
                    </div>
                    </LazyLoadComponent>
                </div>
            </div>
            }
            
        </li>  
    )
}