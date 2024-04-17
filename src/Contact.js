import React, { useState } from 'react';
import Faq from 'react-faq-component';
import './styles/Contact.css'
import title_image from './images/stoica5.jpg';
import GoogleMap from './GoogleMap';

const data = {
    title: "INTREBARI PUSE FRECVENT",
    rows: [
        {
            title: "Ce trebuie să fac pentru a mă înscrie?",
            content: "Pentru primul antrenament este suficient sa veniti cu un tricou de schimb, niste shorti de sport, si o sticla cu apa, mai departe va vor indruma antrenorii nostri",
        },
        {
            title: "Care este echipamentul de care voi avea nevoie?",
            content: "Echipamentul consta in: manusi, tibiere, fase pentru maini, si proteza, echipament pe care il puteti cumpara separat sau direct de la noi de la sala!",
        },
        {
            title: "Ma vor antrena fratii Stoica?",
            content: "Nu, fratii Stoica se atreneaza la grupa de avansati si sunt devotati carierei lor in arte martiale momentan, dar v-au pregatit o echipa de antrenori profesionisti gata sa va indrume, campioni nationali, luptatori cu o experienta vasta in spate, printre care se afla si antrenorul fratilor stoica si colegii lor de antrenament"
        },
        {
            title: "Ce varste au participantii la cursuri?",
            content: "Depinde de la grupa la alta, la Karate media este de 12 ani, la grupele de Kickbox incepatori si de MMA media de varsta este de 18 ani, iar la grupa de avansati media de varsta este de 30 de ani, dar asta este doar o media orientativa, exista adulti de 40+ ani la grupele de incepatori, si adolescenti la grupa de avansati, te poti antrena cu noi indiferent de varsta pe care o ai ",
        },
        {
            title: "Practicarea unui sport de contact incurajeaza comportamentul violent in afara salii?",
            content: "Nu, credem cu tarie ca produce fix rezultatul opus, aici tinerii pot invata despre respect, se pot disciplina, si au un mediu antrenant in care isi pot consuma energia. Nu toleram folosirea abilitatilor dobandite la sala in afara salii decat in cazuri de autoaparare",
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
                    <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
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

                    
                    </form>
                    <div className='FAQ-section'>
                        <Faq
                            data={data}
                            styles={styles}
                        />
                    </div>
                </div>
                {/* <div className='map'>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.8809805462074!2d26.036604115522604!3d44.415087979102516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201e80ac34baf%3A0x6ca18a61316a236!2sStoica%20Brothers%20Fight%20Academy!5e0!3m2!1sen!2sro!4v1684844791111!5m2!1sen!2sro" 
                        width="90%" height="auto" style={{border:0, marginLeft:'5%', marginRight:'5%', aspectRatio:16/9}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div> */}
                <GoogleMap />

            </div>

        </div>
    )
}

export default Contact;