import React from 'react';
import './styles/Program.css';
import title_image from './images/stoica2.jpg';
import schedule_image from './images/program4-1.jpg';
import trainers_image from './images/program4-2.jpg';

function Program() {
    return(
        <div>
            <div className='page-title'>
                <img src={title_image} className='page-title-image'/>
                <div className='page-title-text'>
                </div>
            </div>

            <div className='program-content'>
                <img src={schedule_image} className='schedule'/>
                <img src={trainers_image} className='trainers'/>
            </div>

            <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.8809805462074!2d26.036604115522604!3d44.415087979102516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201e80ac34baf%3A0x6ca18a61316a236!2sStoica%20Brothers%20Fight%20Academy!5e0!3m2!1sen!2sro!4v1684844791111!5m2!1sen!2sro" 
                        width="90%" height="450" style={{border:0, marginLeft:'5%', marginRight:'5%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Program;