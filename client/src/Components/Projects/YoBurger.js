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
                    <p>front end + ui/ux</p>
                    <p>|</p>
                    <p>view code</p>
                    <p>|</p>
                    <p>visit site?</p>
                </div>
                <div className="infoContainer">
                    <div className="description">
                        <div className="descriptionText"> 
                        Yo-Burger is a redesign of a local establishment's website. Challenging myself to apply newly learned front end techniques to a real world project, I crafted a vibrant and more user-friendly interface that I felt better represented the neighborhood favorite burger joint.
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