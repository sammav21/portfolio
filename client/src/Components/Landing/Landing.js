import {motion} from 'framer-motion';

export default function Landing(){
    const title = Array.from("Samuel Avilés");
    const subtext=Array.from("Full Stack Developer");
    const letters= {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: 'linear'
            }
        }
    };
    return(
    <section className="landing" >
        <div className="landingContentWrapper w100 flex column align-c justify-c" >
                <h1  className="name" >{title}</h1>
                <motion.span  className="subtext" variants={letters}>{subtext}</motion.span>          
        </div>
    </section>
    )
}