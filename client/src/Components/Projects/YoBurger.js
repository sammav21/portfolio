import {useState} from 'react';
import MEDIA from '../../images/media';
import Picture from '../Projects/Picture';
export default function YoBurger(){

    const [openProject, setOpenProject] = useState(false);

    return(
        <li className="projectContainer w100 flex column" id="yoBurgerContainer">
            <div className={openProject ? "projectTitleContainer w100 flex" : "projectTitleContainer w100 flex closed"}  onClick={() => setOpenProject(!openProject)}>
                <img src={MEDIA.yoBurgerLogo} id="yoBurgerTitle" alt='Logo that reads "YOBURGER"'/>
            </div>
            {openProject && 
            <div className="openProject w100 flex align-c justify-c">
                <div className="infoSide flex column align-c justify-c">
                        <div className="descriptionText"> 
                        Yo-Burger is a redesign of a local establishment's website. Challenging myself to apply newly learned front end techniques to a real world project, I crafted a vibrant and more user-friendly interface that I felt better represented the neighborhood favorite burger joint.
                        </div>
                        <div className="techStack w100">
                            Tech Stack: HTML, CSS, JS
                        </div>
                </div>
                <div className="mediaSide h100 flex column">
                    <div className="infoBar w100 flex">
                        <p>front end + ui/ux</p>
                        <p>|</p>
                        <a href='https://github.com/sammav21/Clone-Redesign' className='projectLink' target="_blank" rel="noopener noreferrer">view code</a>
                        <p>|</p>
                        <a href='https://sammav21.github.io/Clone-Redesign/index.html' className='projectLink' target="_blank" rel="noopener noreferrer">visit redesign site</a> 
                        <p>|</p>
                        <a href='https://www.yo-burger.com/' className='projectLink' target="_blank" rel="noopener noreferrer">visit original site</a>
                    </div>
                    <div className="media w100 flex column align-c">
                        <Picture direction='picture left' src={MEDIA.yoBurgerLanding} alt='Landing web page for Yo-Burger. Text reads "Our concept is simple: Build it your way". On the right a close up of a burger.'/>
                        <Picture direction='picture right' src={MEDIA.yoBurgerMenu} alt='Web page displaying the food menu'/>
                        <Picture direction='picture left' src={MEDIA.yoBurgerVisit} alt='Phone screenshot showing business hours, phone number, and location'/>
                        <Picture direction='picture right' src={MEDIA.yoBurgerFooter} alt='Bottom of web page with company social media links to the left, contact info in the middle, and a link to a job application on the right.'/>
                    </div>
                </div>
            </div>
            }
            
        </li> 
    )
}