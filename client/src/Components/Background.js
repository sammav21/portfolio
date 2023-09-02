import MEDIA from "../images/media";

export default function Background(){
    return(
        <div className="imgWrapper">
    <img src={MEDIA.colorBlob} className="colorBlob" alt="Background Graphic" />
    </div>
    )
}