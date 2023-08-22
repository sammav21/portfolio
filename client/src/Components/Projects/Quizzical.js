import {useState} from 'react';
import yellowBlob from '../../images/yellow-blob.png';
import blueBlob from '../../images/blue-blob.png';

export default function Quizzical(){

    const [openProject, setOpenProject] = useState(false);

    return(
        <li className="projectTitleContainer" id="quizzicalContainer">
             <img src={yellowBlob} className='yellowBlob' />
            <h3 className="projectTitle" id="quizzicalTitle" onClick={() => setOpenProject(!openProject)}>Quizzical</h3>
            
            {openProject && 
            <div className="openProject">
                <div className="infoBar">
                    <p>front end</p>
                    <p>|</p>
                    <p>view code</p>
                    <p>|</p>
                    <p>visit site?</p>
                </div>
                <div className="infoContainer">
                    <div className="description">
                        <div className="descriptionText"> 
                        Quizzical is an interactive trivia application. The application parses through data collected from a trivia API to create a trivia game. This project was the final assignment from the Scrimba React course.
                        </div>
                        <div className="techStack">
                            Tech Stack: React
                        </div>
                    </div>
                    <div className="media">
                        <div className="image"></div>
                    </div>
                </div>
                <img src={blueBlob} className='blueBlob' />
            </div>
            }
            
        </li> 
    )
}