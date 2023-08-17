import React from 'react';
import './styles/About.css'
import title_image from './images/stoica3.jpg';
import big_image from './images/stoica4-4.jpg'
import { useEffect, useRef } from 'react';

function About() {

    useEffect(() => {
        const options = { root: null, rootMargin: '0px', threshhold:1.0,}
       
        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting)
                {
                    entry.target.classList.add('visible');
                    entry.target.classList.remove('hidden')
                    console.log("element visible");
                    observer.unobserve(entry.target);
                } 
    
                else
                {
                    entry.target.classList.remove("visible");
                    entry.target.classList.add("hidden");
    
                    console.log('element unvisible');
                }
    
    
            })
        }

        const observer = new IntersectionObserver(handleIntersection, options);
        const elements = document.getElementsByClassName("hidden");

        //can't call .forEach on elements because it's a node list
        Array.from(elements).forEach(element => { observer.observe(element); })

        return() => {
            observer.disconnect();
        }
    }, []);



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

                <img src={big_image} alt='stoica-family'/>
            </div>

        </div>
    )
}

export default About;