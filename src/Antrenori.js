import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './styles/Antrenori.css';
import title_image from './images/stoica8-3.jpeg'

import serghei from './images/serghei.jpg'
import sergheiBanner from './images/serghei-banner-2.png';
import sergheiGroup from './images/serghei-grupa.png';
import sergheiCool1 from './images/serghei-cool1.png';
import sergheiCool2 from './images/serghei-cool2.png';

import mircea from './images/mircea.jpg'

import hodea from './images/hodea.jpg'
import hodeaBanner from './images/hodea-banner.png';
import hodeaGroup from './images/hodea-grupa.jpg';
import hodeaCool1 from './images/hodea-cool1.png';
import hodeaCool2 from './images/hodea-cool2.png'

import mogos from './images/mogos.jpg'
import mogosBanner from './images/mogos-banner.png';
import mogosGroup from './images/mogos-grupa.jpg';
import mogosCool1 from './images/mogos-cool1.png';
import mogosCool2 from './images/mogos-cool2.png';

import gitlan from './images/gitlan.jpg'
import gitlanBanner from './images/gitlan-banner.png';
import gitlanGroup from './images/gitlan-grupa.png';
import gitlanCool1 from './images/gitlan-cool1.png';
import gitlanCool2 from './images/gitlan-cool2.png';

import mihalache from './images/mihalache.jpg'
import mihalacheBanner from './images/mihalache-banner.png';
import mihalacheGroup from './images/mihalache-grupa.jpg';
import mihalacheCool1 from './images/mihalache-cool1.png';
import mihalacheCool2 from './images/mihalache-cool2.png';





import CoachGrid from './CoachGrid';
import observer from './Observer';


function Antrenori(){

    const [coach, setCoach] = useState("hodea");
    const [showVideo, setShowVideo] = useState(false);
    const [currentScrollY, setCurrentScrollY] = useState(0);
    const [pixelsAboveImages, setPixelsAboveImages] = useState(0)

    useEffect(() => {
        const calculatePixelsAbove = () => {

            const imagesContainer = document.querySelector('.images');
            if(!imagesContainer)
            {
                return;
            }
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

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', calculatePixelsAbove);
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
                // console.log("elements moved");
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

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    const updateCoach = (coach) => {
        setCoach(coach);
    }

    const updateShowVideo = (bool) => {
        setShowVideo(bool);
    }

    function handleBackButton() {
        setShowVideo(false);
        setCoach("hodea");
    }

    function scrollToCoach(coach) {
        setCoach(coach);
        console.log("scrollToCoach function called")
        const targetElement = document.getElementsByClassName('coach-info')[0];
        const navBarOffset = (window.innerHeight < 640) ? 60 : 80;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navBarOffset;
        if(targetElement)
        {
            console.log("target element found");
            window.scrollTo({top: targetPosition, behavior: "smooth"});
        }
    }


    return(
        <div>
            <div className='page-title'>
                <img src={title_image} alt='Antrenori' className='page-title-image'/>
                <div className='page-title-text'>
                    <h1> Antrenori </h1>
                </div>
            </div>

            <div className='antrenori-content'>
                {/* <div className='sliding-text'>
                        <p> VEZI CUM ARATA O ZI DE ANTRENAMENT LA ORICARE ANTRENOR &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            VEZI CUM ARATA O ZI DE ANTRENAMENT LA ORICARE ANTRENOR &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            VEZI CUM ARATA O ZI DE ANTRENAMENT LA ORICARE ANTRENOR &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            VEZI CUM ARATA O ZI DE ANTRENAMENT LA ORICARE ANTRENOR </p>
                </div>

                <CoachGrid coach={coach} showVideo={showVideo} updateCoach={updateCoach} updateShowVideo={updateShowVideo}/> */}

                <Carousel 
                className='carousel'
                responsive={responsive}
                showDots={false}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                centerMode={false}
                draggable={false}
                itemClass="carousel-item"
                >

                    <div className='slider' onClick={() => {scrollToCoach("serghei")}}> <img src={serghei} /> <div className='overlay'></div> </div>
                    <div className='slider' onClick={() => {scrollToCoach("mircea")}}><img src={mircea}/> <div className='overlay'></div> </div>
                    <div className='slider' onClick={() => {scrollToCoach("hodea")}}><img src={hodea}/> <div className='overlay'></div> </div>
                    <div className='slider' onClick={() => {scrollToCoach("mogos")}}><img src={mogos}/> <div className='overlay'></div> </div>
                    <div className='slider' onClick={() => {scrollToCoach("gitlan")}}><img src={gitlan}/> <div className='overlay'></div> </div>
                </Carousel>;

                <div className='coach-info'>
                    {showVideo ? <button className='backButton' onClick={handleBackButton}> <b> inapoi </b></button> : <> </>}
                    <img src={coachData[coach]["banner"]} className='banner' />
                    <div className='to-observe images'>
                        <img src={coachData[coach]["group"]} className='group to-observe hidden'/>
                        <img src={coachData[coach]["coolImage1"]} className='cool-picture1 parallax-image to-observe hidden' data-speed="0.4" />
                        <img src={coachData[coach]["coolImage2"]} className='cool-picture2 parallax-image to-observe hidden' data-speed="-0.4" />
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Antrenori;