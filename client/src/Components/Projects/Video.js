import { useState } from "react";
import ReactPlayer from 'react-player/lazy';
import {LazyLoadComponent} from 'react-lazy-load-image-component';


export default function Video({direction, url}){

    const [videoHover, setVideoHover] = useState(false);

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