import { useEffect, useRef, useState } from "react"
import {motion, useScroll, useSpring, useTransform, easeIn} from 'framer-motion';
import emailjs from "@emailjs/browser" ;

export default function Contact({contactRef}){

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
    const smoothScroll = useSpring(scrollYProgress, { stiffness: 1000, damping: 100, mass: .1 })

    const opacity = useTransform(smoothScroll, [0, .7], [0, 1], {ease: easeIn});
    const x = useTransform(smoothScroll, [0, .7], ['-50%', '0%'], {ease: easeIn});

    return(
    <div ref={contactRef} className="contact">
    <motion.section ref={targetRef} style={{opacity, x}}>
        <div className="w100 flex justify-c">
        <h2  className="sectionTitle">CONTACT</h2>
        
        </div>
        <form ref={form} onSubmit={sendEmail} className="w100 flex column align-c justify-c">
                <p className="formTitle">Let's Connect</p>
                <input type="text" id="username" name="username" className="input" placeholder="name" required/>
                <input type="email" id="email" name="email" className="input" placeholder="email" required/>
                <input type="text" id="subject" className="input" name="subject" placeholder="subject"/>            
                <textarea id="message" className="input" name="message" placeholder="message" required/>    
                {emailSent ? <p id="successMessage">Your message is on its way!</p> : <input type="submit" id="submit" /> }
                
        </form>
    </motion.section>
    </div>
    )
}