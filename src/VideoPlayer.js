import React from 'react';
import YouTube from 'react-youtube';

function VideoPlayer({videoId, startTime}) {
    const opts = {
        playerVars: {
            autoplay: 1,
            start: startTime,
        },
    };

    return <YouTube videoId={videoId} opts={opts} />
    }

export default VideoPlayer;