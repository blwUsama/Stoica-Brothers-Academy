import React, {useEffect, useRef} from 'react';
import hodea from './videos/Hodea.mp4';
import serghei from './videos/Serghei.mp4';
import mogos from './videos/Mogos.mp4';
import mihalache from './videos/Mihalache.mp4';

function VideoPlayer({src, startTime}) 
{
    const videoRef = useRef(null);
    useEffect(() => 
    {
        if(videoRef.current)
            videoRef.current.currentTime = startTime;
    }, [startTime]);


    const prop2src = {
        "hodea": hodea,
        "serghei": serghei,
        "mogos": mogos,
        "mihalache": mihalache
    };


    return (      
        <div>
            <video ref={videoRef} controls autoPlay={true}>
                <source src={prop2src[src]} type='video/mp4'/>
            </video>
        
        </div>
            )
    
};

  
export default VideoPlayer;