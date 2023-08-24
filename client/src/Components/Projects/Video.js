import { useState } from "react";
import ReactPlayer from 'react-player/lazy';

export default function Video({direction, url}){

    const [videoHover, setVideoHover] = useState(false);

    return(
        <div className={direction} onMouseEnter={() => setVideoHover(true)} onMouseLeave={() => setVideoHover(false)} >
            <ReactPlayer url={url} playing={videoHover} loop width='100%' height='auto'/>
        </div>
    )
}