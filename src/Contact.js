import React, { useState } from 'react';
import Faq from 'react-faq-component';
import './styles/Contact.css'
import title_image from './images/stoica7-2.jpeg';
import GoogleMap from './GoogleMap';
import whatsappLogo from './images/whatsapp-logo.png';
import messengerLogo  from './images/messenger-logo.png';

const data = {
    title: "ÎNTREBĂRI PUSE FRECVENT",
    rows: [
        {
            title: "Ce trebuie să fac pentru a mă înscrie?",
            content: "Pentru primul antrenament este suficient să veniți cu un tricou de schimb, niște shorti de sport, și o sticlă cu apă, mai departe vă vor îndrumă antrenorii noștri",
        },
        {
            title: "Care este echipamentul de care voi avea nevoie?",
            content: "Echipamentul constă în: mănuși, tibiere, fașe pentru mâini, și proteză, echipament pe care îl puteți cumpără separat sau direct de la noi de la sala!",
        },
        {
            title: "Ce vârste au participanții la cursuri?",
            content: "Depinde de la grupă la alta, avem grupe de Kickbox, Karate și Brazilian Jiu-Jitsu atât pentru copii (minimum 5 ani) cât și pentru adulți, te poți antrena cu noi indiferent de vârstă pe care o ai",
        },
        {
            title: "Practicarea unui sport de contact încurajează comportamentul violent în afara sălii?",
            content: "Nu, credem cu tărie că produce fix rezultatul opus, aici tinerii pot învăța despre respect, se pot disciplina, și au un mediu antrenant în care își pot consuma energia. Nu tolerăm folosirea abilităților dobândite la sala în afara sălii decât în cazuri de autoapărare",
        }
    ]
}

const styles = {
    bgColor: "rgb(40, 40, 40)",
    // titleTextColor: "white",
    rowTitleColor: "white",
    rowContentColor: "rgb(183, 183, 183)",
    arrowColor: "red",
}

function Contact() 
{   
    const [sentSuccess, setSentSuccess] = useState("still not sent");

    function handleKeyDown(e) 
    {
        if(e.key == "Enter")
            e.preventDefault();
    }

    function handleSubmit(e) 
    {
        e.preventDefault();

        const formData = {
            firstName: e.target.elements.firstName.value,
            lastName: e.target.elements.lastName.value,
            email: e.target.elements.email.value,
            subject: e.target.elements.subject.value,
            message: e.target.elements.message.value,
        };

        const mailOptions = {
            from: 'balawiu@gmail.com',
            to: 'admblw@gmail.com',
            subject: formData.subject,
            text: `From: ${formData.firstName} ${formData.lastName} \nEmail: ${formData.email} \nMessage: ${formData.message}`,
            }

        // POST request to the epxress server here
        // ....

        // const serverURL = 'https://stoica-brothers-gjkp564lwq-lz.a.run.app:3001/send-email'
        const serverURL = 'http://192.168.1.2:3001/send-email'

        fetch(serverURL, {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(mailOptions),
        })
        .then((response) => {
            // console.log("then block has run successfully");
            if(response.ok)
            {
                setSentSuccess(true);
                console.log("email sent successfully: ", response.statusText);
            }
            else
            {
                console.log("an error occurred (inside the .then() block : ", response.statusText);
                setSentSuccess(false);
            }
        })

        .catch((error) => {
            console.log("unable to contact server");
            setSentSuccess(false);
        })

        // e.target.reset();
    }
    

    return(
        <div>
            <div className='page-title'>
                <img src={title_image} className='page-title-image'/>
                <div className='page-title-text'>
                    <h1> Contact </h1>
                </div>
            </div>

            <div className='contact-content'>
                <div className='flex-container'>
                    {/* <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
                        <h2> FORMULAR CONTACT </h2>
                        {sentSuccess == "still not sent" ? 
                        (
                        <div>
                            <div className='inline-input'> 
                            <input type='text' placeholder='Prenume' className='first-name' name='firstName'/>
                            <input type='text' placeholder='Nume' className='last-name' name='lastName'/>
                            </div>
                            <input type='text' placeholder='Email' className='email' name='email'/>
                            <input type='text' placeholder='Subiect' className='subject' name='subject'/>
                            <textarea placeholder="Mesaj" className='message' name='message'> 
                            </textarea>     
                            <input type='submit' value='TRIMITE' className='submitButton'/>
                        </div>    
                        ) 
                        : sentSuccess == true ?
                        (
                        <div className='success'>
                            <p> Multumim ca ne-ati contactat! vom incerca sa revenim cu un raspuns cat mai repede </p>
                        </div>
                        )
                        :
                        (
                        <div className='failure'>
                            <p> Ne pare rau dar a aparut o problema, incercati sa ne contactati pe mailul sau telefonul aflate la fundul paginii </p>
                        </div>
                        )}

                    
                    </form> */}
                    <div className='FAQ-section'>
                        <Faq
                            data={data}
                            styles={styles}
                        />
                    </div>
                    
                </div>

                <GoogleMap />

            </div>

            <a href="https://api.whatsapp.com/send?phone=+40737022239"><img src={whatsappLogo} className='contact-icon'/></a>
        </div>
    )
}

export default Contact;