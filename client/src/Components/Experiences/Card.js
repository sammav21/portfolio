export default function Card(props){
    return(
        <div className="card flex column align-c"> {/*glass effect?*/}
            <h3 className="cardTitle">{props.title}</h3>
            <div className="cardImageContainer flex align-c justify-c" id={props.id}> 
            {props.imageContent}
            </div>
            <div className="cardTextContainer flex column">
                <div>
                <h4>{props.experience}</h4>
                <p>{props.text}</p>
                </div>
                <div className="technologies w100 flex align-c">
                    <p>tech stack:</p>
                 {props.tech.map((name, i) => {
                    return (
                        <p className="techLogos" key={i}>{name}</p>
                    )
                 })}
                </div>
            </div>
        </div>
    )
}