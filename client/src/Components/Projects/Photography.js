import {useState} from 'react';

export default function Photography(){

    const [openProject, setOpenProject] = useState(false);

    return(
        <li className="projectTitleContainer" id="photographyContainer">
            <h3 className="projectTitle" id="photographyTitle" onClick={() => setOpenProject(!openProject)}>Samuel Avilés Photography</h3>
            {openProject && 
            <div className="openProject">
                <div className="infoBar">
                    <p>front end</p>
                    <p>|</p>
                    <a href='https://github.com/sammav21/Photo-Portfolio' target="_blank" rel="noopener noreferrer">view code</a>
                    <p>|</p>
                    <a href='https://samuelavilesphotography.com/' target="_blank" rel="noopener noreferrer">visit site</a>
                </div>
                <div className="infoContainer">
                    <div className="description">
                        <div className="descriptionText">
                        My first project ever! Knocking out two birds with one stone, I created my long overdue photography portfolio using the fundamental HTML and CSS skills I was just beginning to learn. The code for this project isn't pretty, but it marks an important shift in my career journey. 
                        </div>
                        <div className="techStack">
                            Tech Stack: HTML & CSS
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