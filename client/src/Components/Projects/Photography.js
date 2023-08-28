import {useState} from 'react';
import Picture from './Picture';
import MEDIA from '../../images/media';

export default function Photography(){

    const [openProject, setOpenProject] = useState(false);

    return(
        <li className="projectTitleContainer" id="photographyContainer">
            <h3 className={openProject ? "projectTitle" : "projectTitle closed"} id="photographyTitle" onClick={() => setOpenProject(!openProject)}>Samuel Avilés Photography</h3>
            {openProject && 
            <div className="openProject">
                <div className="infoSide">
                        <div className="descriptionText">
                        My first project ever! Knocking out two birds with one stone, I created my long overdue photography portfolio using the fundamental HTML and CSS skills I was just beginning to learn. The code for this project isn't pretty, but it marks an important shift in my career journey. 
                        </div>
                        <div className="techStack">
                            Tech Stack:<br/>HTML & CSS
                        </div>
                </div>
                <div className="mediaSide">
                    <div className="infoBar">
                        <p>front end</p>
                        <p>|</p>
                        <a href='https://github.com/sammav21/Photo-Portfolio' className='projectLink' target="_blank" rel="noopener noreferrer">view code</a>
                        <p>|</p>
                        <a href='https://samuelavilesphotography.com/' className='projectLink' target="_blank" rel="noopener noreferrer">visit site</a>
                    </div>
                    <div className="media">
                        <Picture direction='picture left' src={MEDIA.photoLanding}/>
                        <Picture direction='picture right' src={MEDIA.photoPhotos}/>
                        <Picture direction='picture left' src={MEDIA.photoAbout}/>
                    </div>
                </div>
            </div>
            }
            
        </li>  
    )
}