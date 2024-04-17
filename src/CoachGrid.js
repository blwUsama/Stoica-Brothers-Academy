import React, { useState, useEffect} from 'react';

import gitlan from './images/gitlan.jpg';
import mircea from './images/mircea.jpg';
import mihalache from './images/mihalache.jpg';
import serghei from './images/serghei.jpg';
import mogos from './images/mogos.jpg';
import hodea from './images/hodea.jpg';

import VideoPlayer from './VideoPlayer';

function CoachGrid(props) {

    const [startTime, setStartTime] = useState();
    const [gridIsHovered, setGridIsHovered] = useState(false);
    const [videoURL, setVideoURL] = useState();

    let previousCoach = null;
    
    const cycleThroughCoaches = () => {
        if(props.showVideo)
            return;
        // console.log("cycle function called");
        const gridItems = document.getElementsByClassName('grid-item');
        let randomIndex = Math.floor(Math.random() * 6);
        //mare tiganeala
        if(gridItems[randomIndex])
        {
            while(randomIndex == 1 || gridItems[randomIndex].getAttribute('data-coach') == previousCoach)
            // while(randomIndex == 1)
                randomIndex = Math.floor(Math.random() * 6);
            gridItems[randomIndex].classList.add("hovered");
    
            setTimeout(() => {
                if(gridItems[randomIndex])
                    gridItems[randomIndex].classList.remove("hovered")
            }, 3000);
            
            props.updateCoach(gridItems[randomIndex].getAttribute('data-coach'));
            // console.log(`previous coach data = ${previousCoach}`);
            // console.log(`coach data = ${gridItems[randomIndex].getAttribute('data-coach')}`);
            previousCoach = gridItems[randomIndex].getAttribute('data-coach');
        }

    }



    useEffect(() => {
        const grid = document.getElementsByClassName("grid-container")[0];
        grid.addEventListener('mouseover', () => {
             setGridIsHovered(true); 
             clearInterval(intervalId);
             const targetGridItem = document.querySelector(`[data-coach="${previousCoach}"]`)
             //tiganeala
             if(targetGridItem)
                targetGridItem.classList.remove("hovered"); })
        grid.addEventListener('mouseout', () => {
            setGridIsHovered(false); 
            intervalId = setInterval(cycleThroughCoaches, 3000); 

        })
        cycleThroughCoaches();
        let intervalId = setInterval(cycleThroughCoaches, 3000);

        window.addEventListener("popstate", () => { console.log("back button pressed")})


        return () => {
            grid.removeEventListener('mouseover', () => { setGridIsHovered(true); clearInterval(intervalId); })
            grid.removeEventListener('mouseout', () => {setGridIsHovered(false); intervalId = setInterval(cycleThroughCoaches, 3000); })
        }

    }, [])

    function handlePlayerRendering(coach, startTime, URL) {
        props.updateCoach(coach);
        props.updateShowVideo(true);
        setStartTime(startTime);
        setVideoURL(URL);
    }
    function handleMouseOver(event) {
        event.target.classList.add('hovered');
        props.updateCoach(event.target.parentNode.getAttribute("data-coach"))
    }

    function handleMouseOut(event) {
        event.target.classList.remove('hovered');
    }

    if (props.showVideo) {
        return (
            <div className='video-player'>
                <iframe 
                    src={videoURL} 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                </iframe>
            </div>

        )
    }


    return (

        <div>

            <div className='grid-container visible'>
                <div className='grid-item' data-coach="gitlan">
                    <img src={gitlan} alt='Gitlan' 
                        onClick={() => { handlePlayerRendering("gitlan", 29, "https://www.youtube.com/embed/zyb78qR7O-w?start=29&autoplay=1&rel=0") }} 
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}/>
                </div>
                <div className='grid-item' data-coach="mircea">
                    <img src={mircea} alt='Mircea' />
                </div>
                <div className='grid-item' data-coach="mihalache">
                    <img src={mihalache} alt='Mihalache' 
                        onClick={() => handlePlayerRendering("mihalache", 29, "https://www.youtube.com/embed/jr3RA4vz1H4?start=29&autoplay=1&rel=0")}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut} />
                </div>
                <div className='grid-item' data-coach="serghei">
                    <img src={serghei} alt='Serghei' 
                        onClick={() => handlePlayerRendering("serghei", 28, "https://www.youtube.com/embed/mIyFHJv90Qw?start=28&autoplay=1")} 
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}/>
                </div>
                <div className='grid-item' data-coach="mogos">
                    <img src={mogos} alt='Mogos' 
                        onClick={() => handlePlayerRendering("mogos", 28, "https://www.youtube.com/embed/AfVKcA9-qCg?start=28&autoplay=1")} 
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}/>
                </div>
                <div className='grid-item' data-coach="hodea">
                    <img src={hodea} alt='Hodea' 
                        onClick={() => handlePlayerRendering("hodea", 28, "https://www.youtube.com/embed/ll4fapxYjrw?start=28&autoplay=1")} 
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}/>
                </div>
            </div>

        </div>
    )
}

export default CoachGrid;