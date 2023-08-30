import MEDIA from "../images/media";
import {motion} from 'framer-motion';

export default function Background(){
    
    const imgVariants = {
        initial: {
                rotate: 0,
        },
        moving: {
           rotate: 359,
            transition:{
                delay: 4,
                duration: 60,
                repeat: Infinity,
                ease: 'linear'
            }
        }
    }
    return(
    <>
    <motion.img src={MEDIA.colorBlob} className="colorBlob" alt="Background Graphic" variants={imgVariants} initial='initial' animate='moving'/>
    </>
    )
}