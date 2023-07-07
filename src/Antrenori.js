import React, {useState} from 'react';
import './styles/Antrenori.css';
import title_image from './images/stoica8-3.jpeg'

import CoachGrid from './CoachGrid';

function Antrenori() {
    const [showVideo, setShowVideo] = useState(false);
    const [videoURL, setVideoURL] = useState();

    function handlePlayerRendering(URL) {
        setShowVideo(true);
        setVideoURL(URL);
    }

    return(
        <div>
            <div className='page-title'>
                <img src={title_image} className='page-title-image'/>
                <div className='page-title-text'>
                    <h1> Antrenori </h1>
                </div>
            </div>

            <div className='antrenori-content'>

                <p> APASA PE ORICARE ANTRENOR SI VEZI CUM ARATA O ZI DE ANTRENAMENT LA GRUPA RESPECTIVA </p>
                <CoachGrid/>

            </div>
        </div>

    )

}

export default Antrenori;