import React from 'react';
import './styles/Antrenori.css';
import title_image from './images/stoica8-3.jpeg'

import CoachGrid from './CoachGrid';

function Antrenori(){

    return(
        <div>
            <div className='page-title'>
                <img src={title_image} alt='Antrenori' className='page-title-image'/>
                <div className='page-title-text'>
                    <h1> Antrenori </h1>
                </div>
            </div>

            <div className='antrenori-content'>
                <div className='sliding-text'>
                        <p> VEZI CUM ARATA O ZI DE ANTRENAMENT LA ORICARE ANTRENOR &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            VEZI CUM ARATA O ZI DE ANTRENAMENT LA ORICARE ANTRENOR &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            VEZI CUM ARATA O ZI DE ANTRENAMENT LA ORICARE ANTRENOR &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            VEZI CUM ARATA O ZI DE ANTRENAMENT LA ORICARE ANTRENOR </p>
                </div>
                <CoachGrid/>

            </div>
        </div>

    )

}

export default Antrenori;