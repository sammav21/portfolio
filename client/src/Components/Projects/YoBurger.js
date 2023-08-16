import {useState} from 'react';
import logo from '../../images/YoBurgerLogo.png';

export default function YoBurger(){

    const [openProject, setOpenProject] = useState(false);

    return(
        <li className="projectTitleContainer" id="yoBurgerContainer">
            <div className="projectTitle"  onClick={() => setOpenProject(!openProject)}>
                <img src={logo} id="yoBurgerTitle"/>
            </div>
            {openProject && 
            <div className="openProject">
                <div className="infoBar">
                    <p>full stack developer</p>
                    <p>|</p>
                    <p>view code</p>
                    <p>|</p>
                    <p>visit site?</p>
                </div>
                <div className="infoContainer">
                    <div className="description">
                        <div className="descriptionText"> 
                        </div>
                        <div className="techStack">
                            Tech Stack: HTML, CSS, JS
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