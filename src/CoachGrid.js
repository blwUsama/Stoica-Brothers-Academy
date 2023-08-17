import React, {useState, useEffect, useRef} from 'react';
import gitlan from './images/gitlan.jpg';
import mircea from './images/mircea.jpg';

import mihalache from './images/mihalache.jpg';
import mihalacheBanner from './images/mihalache-banner.png';

import serghei from './images/serghei.jpg';
import sergheiBanner from './images/serghei-banner.png';

import mogos from './images/mogos.jpg';
import mogosBanner from './images/mogos-banner.png';

import hodea from './images/hodea.jpg';
import hodeaBanner from './images/hodea-banner-taller.png';
import hodeaGrupa from './images/hodea-grupa.jpg';
import hodeaWidget from './images/hodea-widget.jpg';

import coaches from './images/coaches.png';
import YouTube from 'react-youtube';
// import ReactPlayer from 'react-player';
import VideoPlayer from './VideoPlayer';

function CoachGrid() {
    const [showVideo, setShowVideo] = useState(false);
    const [coach, setCoach] = useState();
    const [startTime, setStartTime] = useState();

    const coach2src = {
                        "hodea": hodeaBanner, 
                        "serghei": sergheiBanner,
                       "mogos" : mogosBanner,
                       "mihalache" : mihalacheBanner
                    }

    function handlePlayerRendering(coach, startTime) {
        setCoach(coach);
        setShowVideo(true);
        setStartTime(startTime);
    }

    function handleBackButton() {
        setShowVideo(false);
    }

    if(showVideo && coach != undefined)
    {
        return(
             <div>
                <div className='flexbox-container'>
                    <div className='video-player'>
                        <VideoPlayer src={coach} startTime={startTime}/>           
                    </div>
                    <img className={"banner"} src={coach2src[coach]}/>
                    <button className='backButton' onClick={handleBackButton}> <b> inapoi </b></button>    
                </div>
                <img className='group-photo' src={hodeaGrupa}/>           
             </div> 
     
            )
    }


    return (

    <div>
        <div className='flexbox-container'>
            <div className='grid-container visible'>
                <div>
                    <img src={gitlan} alt='Gitlan'/>
                </div>
                <div>
                    <img src={mircea} alt='Mircea'/>
                </div>
                <div>
                    <img src={mihalache} alt='Mihalache' onClick={() => handlePlayerRendering("mihalache", 29)}/>
                </div>
                <div>
                    <img src={serghei} alt='Serghei' onClick={() => handlePlayerRendering("serghei", 28)}/>
                </div>
                <div>
                    <img src={mogos} alt='Mogos' onClick={() => handlePlayerRendering("mogos", 28)}/>
                </div>
                <div>
                    <img src={hodea} alt='Hodea' onClick={() => handlePlayerRendering("hodea", 28)}/>
                </div>
            </div>

            <img className={"banner"} src={hodeaBanner}/>
        </div>

        <img className='widget' src={hodeaWidget}/>
        <img className='group-photo' src={hodeaGrupa}/>

    </div>
    )
}

export default CoachGrid;