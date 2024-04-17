import React from 'react';
import {Link} from 'react-router-dom';
import leftFigure from './images/left-figure2.png';
import rightFigure from './images/right-figure2.png';
import training4 from './images/training4.jpg';
import training2 from './images/training2.jpg';
import training7 from './images/training7.jpg';
import GoogleMap from './GoogleMap';


function MainPage()
{
    return(
        <div className='content'>
            <div className="figures-section-flexbox">
                <img className="left-figure" src={leftFigure} alt='Andrei Stoica'/>
                <div className='between-figures-container'>
                    <h4 className='between-figures-headings'> ANTRENEAZA-TE CU CAMPIONII </h4>
                    <h1 className='between-figures-headings'> PENTRU A DEVENI CAMPION </h1>
                    <Link to="/antrenamente"><button className='button'> <b> DEVINO MEMBRU </b></button></Link>
                </div>
                <img className="right-figure" src={rightFigure} alt='Bogdan Stoica'/>
            </div>

            <div className="row">
                <div className='image-container'>
                <img src={training4} alt='Picture 1'/>
                <div className='fade2R'></div>
                </div>
                <div className="text">
                <h2> Bine ați venit la orice vârstă! </h2>
                <hr/>
                <p> Indiferent de câți ani aveți, sunteți bineveniți la sala noastră. 
                    Descoperiți bucuria antrenamentelor într-un mediu prietenos și motivant! </p>
                </div>
            </div>

            <div className="row" style={{flexDirection: 'row-reverse'}}>
                <div className='image-container'>
                <img src={training2} alt='Picture 2'/>
                <div className='fade2L'></div>
                </div>
                <div className="text">
                <h2>Alege arta marțială potrivită ție!</h2>
                <hr/>
                <p>  Kickboxing, BJJ, karate și MMA. La sala noastră
                    veți găsi disciplina marțială potrivită pasiunii voastre.
                    Vă vom ghida în fiecare etapă a călătoriei voastre marțiale </p>
                </div>
            </div>

            <div className="row">
                <div className='image-container'>
                <img src={training7} alt='Picture 3'/>
                <div className='fade2R'></div>
                </div>
                <div className="text">
                <h2> Găsește-ți disciplina </h2>
                <hr/>
                <p>  Disciplina este cheia succesului în kickboxing. 
                    Vă îndrumăm să atingeți noi culmi, să vă depășiți limitele 
                    și să evoluați într-un mediu de antrenament dedicat. </p>
                </div>
            </div>

            {/* <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.8809805462074!2d26.036604115522604!3d44.415087979102516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201e80ac34baf%3A0x6ca18a61316a236!2sStoica%20Brothers%20Fight%20Academy!5e0!3m2!1sen!2sro!4v1684844791111!5m2!1sen!2sro" 
                        width="90%" height="auto" style={{border:0, marginLeft:'5%', marginRight:'5%', aspectRatio:16/9}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
             */}
            {/* <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.8809805462074!2d26.036604115522604!3d44.415087979102516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201e80ac34baf%3A0x6ca18a61316a236!2sStoica%20Brothers%20Fight%20Academy!5e0!3m2!1sen!2sro!4v1684844791111!5m2!1sen!2sro" 
                 allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div> */}
            <GoogleMap />
        </div>
    )
}

export default MainPage