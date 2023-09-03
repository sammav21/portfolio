import {useState} from 'react';
import MEDIA from '../../images/media';
import Picture from './Picture';

export default function Quizzical(){

    const [openProject, setOpenProject] = useState(false);

    return(
        <li className="projectContainer w100 flex column" id="quizzicalContainer">
             <img src={MEDIA.yellowBlob} className='yellowBlob' alt='yellowBlob'/>
            <h3 className={openProject ? "projectTitleContainer w100 flex" : "projectTitleContainer w100 flex closed"} id="quizzicalTitle" onClick={() => setOpenProject(!openProject)}>Quizzical</h3>
            
            {openProject && 
            <div className="openProject w100 flex align-c justify-c">
                <div className="infoSide flex column align-c justify-c">
                        <div className="descriptionText"> 
                        Quizzical is an interactive trivia application. The application parses through data collected from a trivia API to create a trivia game. This project was the final assignment from the Scrimba React course.
                        </div>
                        <div className="techStack w100">
                            Tech Stack: React
                        </div>
                </div>
                <div className="mediaSide h100 flex column">
                    <div className="infoBar w100 flex">
                        <p>front end</p>
                        <p>|</p>
                        <a href='https://github.com/sammav21/quiz-react' className='projectLink' target="_blank" rel="noopener noreferrer">view code</a>
                        <p>|</p>
                        <a href='https://sammav21.github.io/quiz-react/' className='projectLink' target="_blank" rel="noopener noreferrer">visit site</a>
                    </div>
                    <div className="media w100 flex column align-c">
                        <Picture direction='picture left' src={MEDIA.quizLanding} alt='Landing web page for Quizzical. Text reads "Quizzical: Unlock your curisotity". Below is a start button.'/>
                        <Picture direction='picture right' src={MEDIA.quizQuiz} alt='Web page with 4 questions and 4 choices each'/>
                        <Picture direction='picture left' src={MEDIA.quizResults} alt='Web page of completed quiz highlighting correct and incorrect answers. Score is shown to user'/>
                    </div>
                </div>
                <img src={MEDIA.blueBlob} className='blueBlob' alt='blueBlob' />
            </div>
            }
            
        </li> 
    )
}