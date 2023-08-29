import { useEffect, useRef, useState } from "react"
import {motion, useScroll, useTransform} from 'framer-motion';
import emailjs from "@emailjs/browser" ;

export default function Contact(props){

    const form = useRef();
    const [emailSent, setEmailSent] = useState(false);

    const sendEmail = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_yq1mu4q', 'template_kfzh4vr', form.current, '0KwsHIMgHCKK-K_Mm')
        .then((result) => {
            setEmailSent(true);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
        
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setEmailSent(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, [emailSent]);

    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ['start end', 'end end']
    });

    const opacity = useTransform(scrollYProgress, [0, .8], [0, 1]);
    const x = useTransform(scrollYProgress, [0, 1], [800, 0]);
    const xReverse = useTransform(scrollYProgress, [0, 1], [-800, 0]);

    return(
    <div ref={props.contactRef} className="contact">
    <motion.section ref={targetRef} style={{opacity}}>
        <div className="sectionTitleWrapper">
        <motion.h2 ref={targetRef} style={{x}} className="sectionTitle">CONTACT</motion.h2>
        </div>
        <motion.form ref={form} onSubmit={sendEmail} style={{x: xReverse}}>
                <input type="text" id="username" name="username" className="input" placeholder="name" required/>
                <input type="email" id="email" name="email" className="input" placeholder="email" required/>
                <input type="text" id="subject" className="input" name="subject" placeholder="subject"/>            
                <textarea id="message" className="input" name="message" placeholder="message" required/>    
                {emailSent ? <p>Your message is on its way!</p> : <input type="submit" id="submit" /> }
        </motion.form>
    </motion.section>
    </div>
    )
}