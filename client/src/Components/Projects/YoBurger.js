import {useState} from 'react';
import MEDIA from '../../images/media';
import Picture from '../Projects/Picture';
export default function YoBurger(){

    const [openProject, setOpenProject] = useState(false);

    return(
        <li className="projectTitleContainer" id="yoBurgerContainer">
            <div className="projectTitle"  onClick={() => setOpenProject(!openProject)}>
                <img src={MEDIA.yoBurgerLogo} id="yoBurgerTitle"/>
            </div>
            {openProject && 
            <div className="openProject">
                <div className="infoBar">
                    <p>front end + ui/ux</p>
                    <p>|</p>
                    <a href='https://github.com/sammav21/Clone-Redesign' target="_blank" rel="noopener noreferrer">view code</a>
                    <p>|</p>
                    <a href='https://sammav21.github.io/Clone-Redesign/index.html' target="_blank" rel="noopener noreferrer">visit site</a>
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
                        <Picture direction='picture left' src={MEDIA.yoBurgerLanding}/>
                        <Picture direction='picture right' src={MEDIA.yoBurgerMenu}/>
                        <Picture direction='picture left' src={MEDIA.yoBurgerVisit}/>
                        <Picture direction='picture right' src={MEDIA.yoBurgerFooter}/>
                    </div>
                </div>
            </div>
            }
            
        </li> 
    )
}