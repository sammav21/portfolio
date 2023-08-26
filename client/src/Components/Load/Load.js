// import MEDIA from "../../images/media";

// export default function Load(props){
//     const beigeVariant = {
//         animate: {opacity: 1, x: [200, 100, 0, -100, -200, -300, -400, -450, -450, -400, -350, -250, -200, -150, -100, -50], y: [0, 0, 0, 0, 0, 0, 50, 100, 150, 200, 250, 300, 250, 200, 150, 100],  transition: {ease: 'linear', duration: 3}},
//         exit: {opacity: 0, x: 0, y: 0, transition: {duration: 2}}
//     }
//     return(
//         <props.motion.img src={MEDIA.beigeNoise} className="beigeBlob" alt="Background Graphic"
//         variants={beigeVariant} animate='animate' exit='exit' onAnimationComplete={() => props.setLoadIn(false)} />
//     )
// }