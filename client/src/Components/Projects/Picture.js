export default function Picture({direction, src}){
    return(
        <div className={direction} >
            <img src={src}  width='100%' height='auto'/>
        </div>
    )
}