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
                        <Picture direction='picture left' src={MEDIA.photoLanding} alt='Landing web page. "Samuel Aviles" is written on top of an image of clouds. Navigation menu is open at the bottom right'/>
                        <Picture direction='picture right' src={MEDIA.photoPhotos} alt='Web page titled "Places". First image shows building facades, secdon image shows a foggy empty beach, final imageshows an aerial view of a moving boat'/>
                        <Picture direction='picture left' src={MEDIA.photoAbout} alt='Screenshot with image of photographer and text that reads "Samuel Aviles is a photographer born, raised, and based in the Bronx. Shooting since 2012, he documents life as he experiences it with a focus in portraiture and street photography. And that"s about it really. for business inquiries please email S.Aviles0621@gmail.com"'/>
                    </div>
                </div>
            </div>
            }
            
        </li>  
    )
}