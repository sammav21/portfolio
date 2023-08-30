export default function Card(props){
    return(
        <div className="card"> {/*glass effect?*/}
            <h3 className="cardTitle">{props.title}</h3>
            <div className="cardImageContainer" id={props.id}> 
            {props.imageContent}
            </div>
            <div className="cardTextContainer">
                <h4>{props.experience}</h4>
                <p>{props.text}</p>
                <div className="technologies">
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