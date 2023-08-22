import { useEffect, useRef, useState } from "react"
import emailjs from "@emailjs/browser" ;

export default function Contact(){

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

    return(
    <div className="contact">
        <h2 className="sectionTitle">Contact</h2>
        <form ref={form} onSubmit={sendEmail}>
                <input type="text" id="username" name="username" className="input" placeholder="name" required/>
                <input type="email" id="email" name="email" className="input" placeholder="email" required/>
                <input type="text" id="subject" className="input" name="subject" placeholder="subject"/>            
                <textarea id="message" className="input" name="message" placeholder="message" required/>    
                {emailSent ? <p>Your message is on its way!</p> : <input type="submit" id="submit" /> }
        </form>
        
    </div>
    )
}