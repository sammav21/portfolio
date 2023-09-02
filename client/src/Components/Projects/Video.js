import { useState } from "react";
import ReactPlayer from 'react-player/lazy';
import {motion, AnimatePresence} from 'framer-motion';
import {LazyLoadComponent} from 'react-lazy-load-image-component';


export default function Video({direction, url}){

    const [videoHover, setVideoHover] = useState(false);

    const symbolVariants = {
        initial: {
            fontSize: 45
        },
        animate:{
            fontSize: 55, 
            transition: 
            {
                delay: 2, 
                duration: 1, 
                repeat: 5, 
                ease: 'linear'
            }
        },
        exit: {
            fontSize: 45, 
            transition: 
            {
                duration: 1, 
                ease: 'linear'
            }
        }
    }
    // variants={symbolVariants} initial='initial' animate='animate' exit='exit'
    return(
        <LazyLoadComponent>
        <div className={direction}  onMouseEnter={() => setVideoHover(true)} onMouseLeave={() => setVideoHover(false)} onTouchStart={() => setVideoHover(true)} onTouchEnd={() => setVideoHover(false)} id={videoHover ? 'hovered' : undefined} >
            <div className={!videoHover && 'videoOff w100'}></div>
            {!videoHover && 
            <span className="material-symbols-outlined hoverIndicator" >back_hand</span>
            }
            <ReactPlayer url={url} playing={videoHover} loop width='100%' height='auto' className='testVideo' />
        </div>
        </LazyLoadComponent>
    )
}