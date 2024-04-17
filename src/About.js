import React from 'react';
import './styles/About.css'
import title_image from './images/stoica3.jpg';
import row_1 from './images/big-image/stoica4-4-1.jpg';
import row_2 from './images/big-image/stoica4-4-2.jpg';
import row_3 from './images/big-image/stoica4-4-3.jpg';
import row_4 from './images/big-image/stoica4-4-4.jpg';
import row_5 from './images/big-image/stoica4-4-5.jpg';
import row_6 from './images/big-image/stoica4-4-6.jpg';
import row_7 from './images/big-image/stoica4-4-7.jpg';
import row_8 from './images/big-image/stoica4-4-8.jpg';
import row_9 from './images/big-image/stoica4-4-9.jpg';
import observer from './Observer.js';

import { useEffect } from 'react';

function About() {

    useEffect(() => {
        const elementsToObserve = document.getElementsByClassName("hidden");
        Array.from(elementsToObserve).forEach((element) => { 
            observer.observe(element);
    })

        return () => {
            Array.from(elementsToObserve).forEach((element) => {
                observer.unobserve(element);
            })
        }
}, []);

    const imagePath = "./images/stoica4-4.jpg";

    return(
        <div>
            <div className='page-title'>
                <img src={title_image} alt='Trofee' className='page-title-image'/>
                <div className='page-title-text'>
                    <h1> Despre Noi </h1>
                </div>
            </div>

            <div className='about-us-content'>
                <div className='about-us-text'>
                    <h1> Stoica Brothers <span className='outline'> Fight Academy </span></h1>
                    <hr></hr>
                </div>
                <h4 className="hidden" > CINE SUNTEM NOI </h4>
                <p className="hidden" > Bine ați venit la Sala Fraților Stoica! Fondată în 2017 de către Andrei și Bogdan Stoica, suntem o sală specializată în kickbox, MMA și BJJ.
                </p>

                <p className="hidden" > Cu o experiență vastă în lumea artelor marțiale, frații Stoica sunt
                    recunoscuți ca fiind doi dintre cei mai talentați și respectați 
                    luptători din România. Misiunea noastră este de a oferi un mediu prietenos și antrenant pentru toți cei pasionați de aceste discipline.
                </p>

                <h4 className="hidden" > ACCESIBIL TUTUROR </h4>
                <p className="hidden" >
                La Sala Fraților Stoica, vă așteaptă instructori dedicați și pregătiți să vă ajute să vă dezvoltați abilitățile. Indiferent de nivelul de experiență, veți găsi aici clase adaptate și o atmosferă prietenoasă.
                </p>

                <p className="hidden" >
                Avem clase regulate de kickbox, MMA și BJJ, adaptate tuturor vârstelor și 
                nivelurilor de pregătire. Fie că sunteți interesat de îmbunătățirea 
                condiției fizice, de învățarea tehnicilor de autoapărare sau de participarea
                la competiții, suntem aici pentru a vă susține în fiecare pas al călătoriei
                voastre în arte marțiale.
                </p>
                <hr></hr>

                <div className='big-image'>
                    <img src={row_1} className='hidden odd'/>
                    <img src={row_2} className='hidden even'/>
                    <img src={row_3} className='hidden odd'/>
                    <img src={row_4} className='hidden even'/>
                    <img src={row_5} className='hidden odd'/>
                    <img src={row_6} className='hidden even'/>
                    <img src={row_7} className='hidden odd'/>
                    <img src={row_8} className='hidden even'/>
                    <img src={row_9} className='hidden odd'/>
                </div>

                
            </div>

        </div>
    )
}

export default About;