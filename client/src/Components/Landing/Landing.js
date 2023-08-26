import {motion} from 'framer-motion';

export default function Landing(){

    const variants= {
        hidden: {opacity: 0},
        visible: {opacity: 1, transition: {duration: 2}}
    }
    return(
    <motion.section className="landing" variants={variants} initial='hidden' animate='visible'>
        <div className="titleSection">
            <h1 className="name">Samuel Avilés</h1>
            <p className="subtext">Full Stack Developer</p>
        </div>
    </motion.section>
    )
}