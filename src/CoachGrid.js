import React, {useState} from 'react';
import gitlan from './images/gitlan.jpg';
import mircea from './images/mircea.jpg';
import mihalache from './images/mihalache.jpg';
import serghei from './images/serghei.jpg';
import mogos from './images/mogos.jpg';
import hodea from './images/hodea.jpg';
import VideoPlayer from './VideoPlayer';

function CoachGrid() {
    const [showVideo, setShowVideo] = useState(false);
    const [videoURL, setVideoURL] = useState();


    function handlePlayerRendering(URL) {
        setShowVideo(true);
        setVideoURL(URL);
    }

    if(showVideo) {
        return(
            <div>
                <iframe 
                    src={videoURL} 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
                <button className='button-join'> <b> inapoi </b></button>
            </div>
        )
    }
    return (
        <div>
            <div className='grid-container'>
                <div>
                    <img src={gitlan}/>
                </div>
                <div>
                    <img src={mircea}/>
                </div>
                <div>
                    <img src={mihalache} onClick={() => handlePlayerRendering("https://www.youtube.com/embed/jr3RA4vz1H4?start=29&autoplay=1&rel=0")}/>
                </div>
                <div>
                    <img src={serghei} onClick={() => handlePlayerRendering("https://www.youtube.com/embed/mIyFHJv90Qw?start=28&autoplay=1")}/>
                </div>
                <div>
                    <img src={mogos} onClick={() => handlePlayerRendering("https://www.youtube.com/embed/AfVKcA9-qCg?start=28&autoplay=1")}/>
                </div>
                <div>
                    <img src={hodea} onClick={() => handlePlayerRendering("https://www.youtube.com/embed/ll4fapxYjrw?start=28&autoplay=1")}/>
                </div>
            </div>
                
                
        </div>
    )
}

export default CoachGrid;