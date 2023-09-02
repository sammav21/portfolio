import { LazyLoadImage } from "react-lazy-load-image-component";
import MEDIA from "../images/media";

export default function Background(){
    return(
    <img src={MEDIA.colorBlob} className="colorBlob" alt="Background Graphic" />
    )
}