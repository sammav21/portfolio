import {LazyLoadImage} from 'react-lazy-load-image-component';
export default function Picture({direction, src, alt}){
    return(
        <div className={direction} >
            <LazyLoadImage src={src}  alt={alt} width='100%' height='auto'/>
        </div>
    )
}