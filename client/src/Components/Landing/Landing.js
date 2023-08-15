import colorBlob from "../../images/colorBlob.png";

export default function Landing(){
    return(
    <div className="landing">
        <div className="titleSection">
            <h1 className="name">Samuel Avilés</h1>
            <p className="subtext">Full Stack Developer</p>
        </div>
        <img src={colorBlob} className="colorBlob" alt="" />
    </div>
    )
}