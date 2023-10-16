import {useState} from 'react';
import Picture from './Picture';
import MEDIA from '../../images/media';

export default function Photography(){

    const [openProject, setOpenProject] = useState(false);

    return(
        <li className="projectContainer w100 flex column" id="photographyContainer">
            <h3 className={openProject ? "projectTitleContainer w100 flex" :  "projectTitleContainer w100 flex closed"} id="photographyTitle" onClick={() => setOpenProject(!openProject)}>Samuel Avilés Photography</h3>
            {openProject && 
            <div className="openProject w100 flex align-c justify-c">
                <div className="infoSide flex column align-c justify-c">
                        <div className="descriptionText">
                        My first project ever! I initially created my photography portfolio using fundamental HTML and CSS skills I was just beginning to learn. Over time, I  updated the site using Next.js for server side rendering and SASS for more efficient styling. I've revamped the design, refactored the code structure, and enhanced performance. Feel free to checkout the original code in the "oldClient" folder.
                        </div>
                        <div className="techStack w100">
                            Tech Stack: Next.js, React.js, SASS
                        </div>
                </div>
                <div className="mediaSide h100 flex column">
                    <div className="infoBar w100 flex">
                        <p>front end</p>
                        <p>|</p>
                        <a href='https://github.com/sammav21/Photo-Portfolio' className='projectLink' target="_blank" rel="noopener noreferrer">view code</a>
                        <p>|</p>
                        <a href='https://www.samuelavilesphotography.com/' className='projectLink' target="_blank" rel="noopener noreferrer">visit site</a>
                    </div>
                    <div className="media w100 flex column align-c">
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