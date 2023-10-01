import React, { useState, useEffect, useRef } from 'react';

import gitlan from './images/gitlan.jpg';
import gitlanBanner from './images/gitlan-banner.png';
import gitlanGroup from './images/gitlan-grupa.png';
import gitlanCool1 from './images/gitlan-cool1.png';
import gitlanCool2 from './images/gitlan-cool2.png';

import mircea from './images/mircea.jpg';

import mihalache from './images/mihalache.jpg';
import mihalacheBanner from './images/mihalache-banner.png';
import mihalacheGroup from './images/mihalache-grupa.jpg';
import mihalacheCool1 from './images/mihalache-cool1.png';
import mihalacheCool2 from './images/mihalache-cool2.png';

import serghei from './images/serghei.jpg';
import sergheiBanner from './images/serghei-banner.png';
import sergheiGroup from './images/serghei-grupa.png';
import sergheiCool1 from './images/serghei-cool1.png';
import sergheiCool2 from './images/serghei-cool2.png';

import mogos from './images/mogos.jpg';
import mogosBanner from './images/mogos-banner.png';
import mogosGroup from './images/hodea-grupa.jpg';
import mogosCool1 from './images/mogos-cool1.png';
import mogosCool2 from './images/mogos-cool2.png';

import hodea from './images/hodea.jpg';
import hodeaBanner from './images/hodea-banner.png';
import hodeaGroup from './images/hodea-grupa.jpg';
import hodeaCool1 from './images/hodea-cool1.png';
import hodeaCool2 from './images/hodea-cool2.png'

import VideoPlayer from './VideoPlayer';
import observer from './Observer';

function CoachGrid() {

    // state hooks
    const [showVideo, setShowVideo] = useState(false);
    const [coach, setCoach] = useState();
    const [startTime, setStartTime] = useState();
    const [currentScrollY, setCurrentScrollY] = useState(0);
    const [pixelsAboveImages, setPixelsAboveImages] = useState(0)

    //// 3 effect hooks:
    // on mount effect hook, adds event listeners
    useEffect(() => {
        const calculatePixelsAbove = () => {
            const imagesContainer = document.querySelector('.images');
            const imagesRect = imagesContainer.getBoundingClientRect();
            const rootElementRect = document.documentElement.getBoundingClientRect()
            setPixelsAboveImages(imagesRect.top - rootElementRect.top);
        }

        const handleScroll = () => {
            setCurrentScrollY(window.scrollY);
            calculatePixelsAbove(); 
            // usually we wouldn't need to calculate how many pixels are above
            // the images container on scroll because the value would always be 
            // the same, however this weird thing happens
            // in which it gets calculated wrong and we end up with a value that's
            // too small and the images don't move at all, i'm guessing this happens
            // because calculatePixelsAbove() gets called before the page fully loads.
            // i've tried adding a 'load' event listener but that didn't work so
            // i'm going to settle for this inefficient workaround
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', calculatePixelsAbove); 
        // if the viewport width changes, then the number of pixels  
        // above the images container changes as well

        setTimeout(() => {
            calculatePixelsAbove();
        }, 500);

        const cycleThroughCoaches = () => {
            console.log("cycle function called");
            const gridItems = document.getElementsByClassName('grid-item');
            const gridItemsArray = Array.from(gridItems);
            const randomIndex = Math.floor(Math.random() * 6);
            console.log(`randomIndex = ${randomIndex}`);
            gridItemsArray[randomIndex].classList.add("hovered");
            setTimeout(() => {
                gridItemsArray[randomIndex].classList.remove("hovered")
            }, 3000);
            setCoach(gridItemsArray[randomIndex].getAttribute('data-coach'));
            // console.log(`coach data = ${gridItemsArray[randomIndex].getAttribute('data-coach')}`)
        }

        // const intervalId = setInterval(cycleThroughCoaches, 3000);


        // cycleThroughCoaches();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', calculatePixelsAbove);
            // clearInterval(intervalId);
        }
    }, [])

    // effect hook for the intersection observer
    useEffect(() => {
        const elementsToObserve = document.getElementsByClassName("to-observe");
        Array.from(elementsToObserve).forEach((element) => {
            observer.observe(element);
        })

        return () => {
            const elementsToObserve = document.getElementsByClassName("to-observe");
            Array.from(elementsToObserve).forEach((element) => {
                observer.unobserve(element);
            })
        };
    }, [showVideo]) 
    // we have showVideo in the dependency array because when we 
    // toggle showVideo, previously hidden elements 
    // get created which need to be observed as well


    // effect hook for moving parallax images
    useEffect(() => {    
        const imagesContainer = document.querySelector(".images");
        const imagesContainerRect = imagesContainer.getBoundingClientRect();
        const parallaxElements = document.querySelectorAll(".parallax-image");

        parallaxElements.forEach((element) => {
            if(imagesContainerRect.top < window.innerHeight) //if imagesContainer is visible
            {
                const imageRect = element.getBoundingClientRect();

                let speed = parseFloat(element.getAttribute('data-speed'));
                if(window.innerWidth <= 600)
                    speed = speed / 1.5;

                let yPos = (window.scrollY - pixelsAboveImages + window.innerHeight) * speed;
                if(yPos > 0)
                    yPos = Math.min(yPos, imagesContainerRect.height - imageRect.height);
                else if(yPos < 0)
                    yPos = Math.max(yPos, - (imagesContainerRect.height - imageRect.height));
                
                element.style.transform = `translateY(${yPos}px)`;
            }
        })

    }, [currentScrollY]) 
    //scrollY in the dependency array to keep track of how far down 
    //we've scrolled, and Y-translates the parallax elements

    // dictionary that changes a string to the corresponding images, write less code
    const coachData = {
        "hodea": {
            banner: hodeaBanner,
            group: hodeaGroup,
            coolImage1: hodeaCool1,
            coolImage2: hodeaCool2
        },

        "serghei": {
            banner: sergheiBanner,
            group: sergheiGroup,
            coolImage1: sergheiCool1,
            coolImage2: sergheiCool2
        },

        "mogos": {
            banner: mogosBanner,
            group: mogosGroup,
            coolImage1: mogosCool1,
            coolImage2: mogosCool2
        },

        "mihalache": {
            banner: mihalacheBanner,
            group: mihalacheGroup,
            coolImage1: mihalacheCool1,
            coolImage2: mihalacheCool2
        },

        "gitlan": {
            banner: gitlanBanner,
            group: gitlanGroup,
            coolImage1: gitlanCool1,
            coolImage2: gitlanCool2
        }

    }

    function handlePlayerRendering(coach, startTime) {
        setCoach(coach);
        setShowVideo(true);
        setStartTime(startTime);
    }

    function handleBackButton() {
        setShowVideo(false);
        setCoach(undefined);
    }

    if (showVideo) {
        return (
            <div>
                <div className='video-player'>
                    <VideoPlayer src={coach} startTime={startTime} />
                </div>

                <div className='test'>
                    <img src={coachData[coach]["banner"]} className='banner' />

                    <div className='images'>
                        <img src={coachData[coach]["group"]} className='group parallax-image to-observe hidden' data-speed="0" />
                        <img src={coachData[coach]["coolImage1"]} className='cool-picture1 parallax-image to-observe hidden' data-speed="0.25" />
                        <img src={coachData[coach]["coolImage2"]} className='cool-picture2 parallax-image to-observe hidden' data-speed="-0.25" />
                    </div>

                    <button className='backButton' onClick={handleBackButton}> <b> inapoi </b></button>
                </div>
            </div>

        )
    }


    return (

        <div>

            <div className='grid-container visible'>
                <div className='grid-item' data-coach="gitlan">
                    <img src={gitlan} alt='Gitlan' onClick={() => { handlePlayerRendering("gitlan", 29) }} />
                </div>
                <div className='grid-item' data-coach="mircea">
                    <img src={mircea} alt='Mircea' />
                </div>
                <div className='grid-item' data-coach="mihalache">
                    <img src={mihalache} alt='Mihalache' onClick={() => handlePlayerRendering("mihalache", 29)} />
                </div>
                <div className='grid-item' data-coach="serghei">
                    <img src={serghei} alt='Serghei' onClick={() => handlePlayerRendering("serghei", 28)} />
                </div>
                <div className='grid-item' data-coach="mogos">
                    <img src={mogos} alt='Mogos' onClick={() => handlePlayerRendering("mogos", 28)} />
                </div>
                <div className='grid-item' data-coach="hodea">
                    <img src={hodea} alt='Hodea' onClick={() => handlePlayerRendering("hodea", 28)} />
                </div>
            </div>

            <div className='test'>
                <img src={hodeaBanner} className='banner' />
                <div className='to-observe images'>
                    <img src={hodeaGroup} className='group to-observe hidden'/>
                    <img src={hodeaCool1} className='cool-picture1 parallax-image to-observe hidden' data-speed="0.4" />
                    <img src={hodeaCool2} className='cool-picture2 parallax-image to-observe hidden' data-speed="-0.4" />
                </div>

            </div>


        </div>
    )
}

export default CoachGrid;