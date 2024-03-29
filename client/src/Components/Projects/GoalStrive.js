import {useState} from 'react';
import MEDIA from '../../images/media';
import Video from './Video';
import {LazyLoadComponent} from 'react-lazy-load-image-component';

export default function GoalStrive(){

    const [openProject, setOpenProject] = useState(false);

    return(
        <li className="projectContainer w100 flex column" id="goalStriveContainer">
            <h3 className={openProject ? "projectTitleContainer w100 flex" : "projectTitleContainer w100 flex closed"} id="goalStriveTitle" onClick={() => setOpenProject(!openProject)}>GoalStrive</h3>
            {openProject && 
            <div className="openProject w100 flex align-c justify-c">
                <div className="infoSide flex column align-c justify-c">
                    <div className="descriptionText">
                        GoalStrive is a goal tracking application designed to help users achieve meaningful aspirations by emphasizing the power of focus and considering deliberate steps. Users connect with the "why" behind their goals, breakdown their goals into manageable stepping stones, and set both ambitious and realistic deadlines for effective planning.
                        </div>
                        <div className="techStack w100">
                            Tech Stack: MySQL, Java, Spring Boot, React
                        </div>
                    </div>
                <div className="mediaSide h100 flex column">
                    <div className="infoBar w100 flex">
                        <p>full stack</p>
                        <p>|</p>
                        <a href='https://github.com/sammav21/goalsList' className='projectLink' target="_blank" rel="noopener noreferrer">view code</a>
                    </div>
                    <LazyLoadComponent>
                    <div className="media w100 flex column align-c">
                        <Video direction='videoContainer left' url={MEDIA.goalStriveOpening}/>
                        <Video direction='videoContainer right' url={MEDIA.goalStriveTips}/>
                        <Video direction='videoContainer left' url={MEDIA.goalStriveAdd}/>
                        <Video direction='videoContainer right' url={MEDIA.goalStriveUpdate}/>
                    </div>
                    </LazyLoadComponent>
                </div>
            </div>
            }
            
        </li>  
    )
}