import {useState} from 'react';
import MEDIA from '../../images/media';
import Video from './Video';

export default function GoalStrive(){

    const [openProject, setOpenProject] = useState(false);

    return(
        <li className="projectTitleContainer" id="goalStriveContainer">
            <h3 className="projectTitle" id="goalStriveTitle" onClick={() => setOpenProject(!openProject)}>GoalStrive</h3>
            {openProject && 
            <div className="openProject">
                <div className="infoBar">
                    <p>full stack</p>
                    <p>|</p>
                    <a href='https://github.com/sammav21/goalsList' target="_blank" rel="noopener noreferrer">view code</a>
                </div>
                <div className="infoContainer">
                    <div className="description">
                        <div className="descriptionText">
                        GoalStrive is a goal tracking application designed to help users achieve meaningful aspirations by emphasizing the power of focus and considering deliberate steps. Users connect with the "why" behind their goals, breakdown their goals into manageable stepping stones, and set both ambitious and realistic deadlines for effective planning.
                        </div>
                        <div className="techStack">
                            Tech Stack: MySQL, Java, Spring Boot, React JS
                        </div>
                    </div>
                    <div className="media">
                        <Video direction='video left' url={MEDIA.goalStriveOpening}/>
                        <Video direction='video right' url={MEDIA.goalStriveTips}/>
                        <Video direction='video left' url={MEDIA.goalStriveAdd}/>
                        <Video direction='video right' url={MEDIA.goalStriveUpdate}/>
                    </div>
                </div>
            </div>
            }
            
        </li>  
    )
}