import {useState} from 'react';
import MEDIA from '../../images/media';

export default function Quizzical(){

    const [openProject, setOpenProject] = useState(false);

    return(
        <li className="projectTitleContainer" id="quizzicalContainer">
             <img src={MEDIA.yellowBlob} className='yellowBlob' />
            <h3 className="projectTitle" id="quizzicalTitle" onClick={() => setOpenProject(!openProject)}>Quizzical</h3>
            
            {openProject && 
            <div className="openProject">
                <div className="infoBar">
                    <p>front end</p>
                    <p>|</p>
                    <a href='https://github.com/sammav21/quiz-react' target="_blank" rel="noopener noreferrer">view code</a>
                    <p>|</p>
                    <a>visit site</a>
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
                <img src={MEDIA.blueBlob} className='blueBlob' />
            </div>
            }
            
        </li> 
    )
}