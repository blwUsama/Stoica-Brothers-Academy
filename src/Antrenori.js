import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import title_image from "./images/titluAntrenori.jpg";
import "./styles/Antrenori.css";

import serghei2 from "./images/serghei/serghei-cool1.png";
import serghei1 from "./images/serghei/serghei-cool2.png";
import serghei from "./images/serghei/serghei.jpg";
import serghei3 from "./images/serghei/serghei3.jpg";
import sergheiNewBanner1 from "./images/serghei/sergheiNewBanner1.jpg";
import sergheiNewBanner2 from "./images/serghei/sergheiNewBanner2.png";

import mircea from "./images/mircea/mircea.jpg";
import mircea1 from "./images/mircea/mircea1.jpg";
import mircea2 from "./images/mircea/mircea2.jpg";
import mircea3 from "./images/mircea/mircea3.jpg";
import mirceaNewBanner1 from "./images/mircea/mirceaNewBanner1.jpg";
import mirceaNewBanner2 from "./images/mircea/mirceaNewBanner2.png";

import hodea from "./images/hodea/hodea.jpg";
import hodea1 from "./images/hodea/hodea1.jpg";
import hodea2 from "./images/hodea/hodea2.jpg";
import hodea3 from "./images/hodea/hodea3.jpg";
import hodeaNewBanner1 from "./images/hodea/hodeaNewBanner1.jpg";
import hodeaNewBanner2 from "./images/hodea/hodeaNewBanner2.png";

import mogos from "./images/mogos/mogos.jpg";
import mogos1 from "./images/mogos/mogos1.jpg";
import mogos2 from "./images/mogos/mogos2.jpg";
import mogos3 from "./images/mogos/mogos3.jpg";
import mogosNewBanner1 from "./images/mogos/mogosNewBanner1.jpg";
import mogosNewBanner2 from "./images/mogos/mogosNewBanner2.png";

import gitlan from "./images/gitlan/gitlan.jpg";
import gitlan1 from "./images/gitlan/gitlan1.jpg";
import gitlan2 from "./images/gitlan/gitlan2.jpg";
import gitlan3 from "./images/gitlan/gitlan3.jpg";
import gitlanNewBanner1 from "./images/gitlan/gitlanNewBanner1.jpg";
import gitlanNewBanner2 from "./images/gitlan/gitlanNewBanner2.png";

import dinica from "./images/dinica/dinica.png";
import dinica1 from "./images/dinica/dinica1.jpg";
import dinica2 from "./images/dinica/dinica2.jpg";
import dinica3 from "./images/dinica/dinica3.jpg";
import dinicaNewBanner1 from "./images/dinica/dinicaNewBanner1.jpg";
import dinicaNewBanner2 from "./images/dinica/dinicaNewBanner2.png";

import bogdan from "./images/bogdan/bogdan.png";
import bogdan1 from "./images/bogdan/bogdan1.png";
import bogdan2 from "./images/bogdan/bogdan2.jpg";
import bogdan3 from "./images/bogdan/bogdan3.jpg";
import bogdanNewBanner1 from "./images/bogdan/bogdanNewBanner1.jpg";
import bogdanNewBanner2 from "./images/bogdan/bogdanNewBanner2.png";

// import CoachGrid from './CoachGrid';
import observer from "./Observer";

function Antrenori() {
  const [coach, setCoach] = useState("mircea");
  const [showVideo, setShowVideo] = useState(false);
  const [currentScrollY, setCurrentScrollY] = useState(0);
  const [pixelsAboveImages, setPixelsAboveImages] = useState(0);

  useEffect(() => {
    const calculatePixelsAbove = () => {
      const imagesContainer = document.querySelector(".coach-images");
      if (!imagesContainer) {
        return;
      }
      const imagesRect = imagesContainer.getBoundingClientRect();
      const rootElementRect = document.documentElement.getBoundingClientRect();
      setPixelsAboveImages(imagesRect.top - rootElementRect.top);
    };

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

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", calculatePixelsAbove);
    // if the viewport width changes, then the number of pixels
    // above the images container changes as well

    setTimeout(() => {
      calculatePixelsAbove();
    }, 500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", calculatePixelsAbove);
    };
  }, []);

  // effect hook for the intersection observer
  useEffect(() => {
    const elementsToObserve = document.getElementsByClassName("to-observe");
    Array.from(elementsToObserve).forEach((element) => {
      observer.observe(element);
    });

    return () => {
      const elementsToObserve = document.getElementsByClassName("to-observe");
      Array.from(elementsToObserve).forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [showVideo]);
  // we have showVideo in the dependency array because when we
  // toggle showVideo, previously hidden elements
  // get created which need to be observed as well

  // effect hook for moving parallax images
  useEffect(() => {
    const imagesContainer = document.querySelector(".coach-images");
    const imagesContainerRect = imagesContainer.getBoundingClientRect();
    const parallaxElements = document.querySelectorAll(".parallax-image");

    parallaxElements.forEach((element) => {
      if (imagesContainerRect.top < window.innerHeight) {
        //if imagesContainer is visible
        const imageRect = element.getBoundingClientRect();

        let speed = parseFloat(element.getAttribute("data-speed"));
        if (window.innerWidth <= 600) speed = speed / 1.5;

        let yPos =
          (window.scrollY - pixelsAboveImages + window.innerHeight) * speed;
        if (yPos > 0)
          yPos = Math.min(yPos, imagesContainerRect.height - imageRect.height);
        else if (yPos < 0)
          yPos = Math.max(
            yPos,
            -(imagesContainerRect.height - imageRect.height)
          );

        element.style.transform = `translateY(${yPos}px)`;
        // console.log("elements moved");
      }
    });
  }, [currentScrollY]);
  //scrollY in the dependency array to keep track of how far down
  //we've scrolled, and Y-translates the parallax elements

  // dictionary that changes a string to the corresponding images, write less code
  const coachData = {
    hodea: {
      newBanner1: hodeaNewBanner1,
      newBanner2: hodeaNewBanner2,
      photo1: hodea1,
      photo2: hodea2,
      photo3: hodea3,
    },

    serghei: {
      newBanner1: sergheiNewBanner1,
      newBanner2: sergheiNewBanner2,
      photo1: serghei1,
      photo2: serghei2,
      photo3: serghei3,
    },

    mogos: {
      newBanner1: mogosNewBanner1,
      newBanner2: mogosNewBanner2,
      photo1: mogos1,
      photo2: mogos2,
      photo3: mogos3,
    },

    gitlan: {
      newBanner1: gitlanNewBanner1,
      newBanner2: gitlanNewBanner2,
      photo1: gitlan1,
      photo2: gitlan2,
      photo3: gitlan3,
    },

    dinica: {
      newBanner1: dinicaNewBanner1,
      newBanner2: dinicaNewBanner2,
      photo1: dinica1,
      photo2: dinica2,
      photo3: dinica3,
    },

    bogdan: {
      newBanner1: bogdanNewBanner1,
      newBanner2: bogdanNewBanner2,
      photo1: bogdan1,
      photo2: bogdan2,
      photo3: bogdan3,
    },

    mircea: {
      newBanner1: mirceaNewBanner1,
      newBanner2: mirceaNewBanner2,
      photo1: mircea1,
      photo2: mircea2,
      photo3: mircea3,
    },
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const updateCoach = (coach) => {
    setCoach(coach);
  };

  const updateShowVideo = (bool) => {
    setShowVideo(bool);
  };

  function handleBackButton() {
    setShowVideo(false);
    setCoach("hodea");
  }

  function scrollToCoach(coach) {
    setCoach(coach);
    console.log("scrollToCoach function called");
    const targetElement = document.getElementsByClassName("coach-info")[0];
    const navBarOffset = window.innerHeight < 640 ? 60 : 80;
    const targetPosition =
      targetElement.getBoundingClientRect().top + window.scrollY - navBarOffset;
    if (targetElement) {
      console.log("target element found");
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  }

  return (
    <div>
      <div className="page-title">
        <img src={title_image} alt="Antrenori" className="page-title-image" />
        <div className="page-title-text">
          {/* <h1 className='text-shadow'> Antrenori</h1> */}
          <h1 className="page-title-header"> Antrenori </h1>
        </div>
      </div>

      <div className="antrenori-content">
        {/* <div className='sliding-text'>
                        <p> VEZI CUM ARATA O ZI DE ANTRENAMENT LA ORICARE ANTRENOR &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            VEZI CUM ARATA O ZI DE ANTRENAMENT LA ORICARE ANTRENOR &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            VEZI CUM ARATA O ZI DE ANTRENAMENT LA ORICARE ANTRENOR &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            VEZI CUM ARATA O ZI DE ANTRENAMENT LA ORICARE ANTRENOR </p>
                </div>

                <CoachGrid coach={coach} showVideo={showVideo} updateCoach={updateCoach} updateShowVideo={updateShowVideo}/> */}
        <Carousel
          className="carousel"
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
          <div
            className="slider"
            onClick={() => {
              scrollToCoach("bogdan");
            }}
          >
            {" "}
            <img src={bogdan} /> <div className="overlay"></div>{" "}
          </div>
          <div
            className="slider"
            onClick={() => {
              scrollToCoach("hodea");
            }}
          >
            <img src={hodea} /> <div className="overlay"></div>{" "}
          </div>
          <div
            className="slider"
            onClick={() => {
              scrollToCoach("mircea");
            }}
          >
            <img src={mircea} /> <div className="overlay"></div>{" "}
          </div>
          <div
            className="slider"
            onClick={() => {
              scrollToCoach("serghei");
            }}
          >
            {" "}
            <img src={serghei} /> <div className="overlay"></div>{" "}
          </div>
          <div
            className="slider"
            onClick={() => {
              scrollToCoach("mogos");
            }}
          >
            <img src={mogos} /> <div className="overlay"></div>{" "}
          </div>
          <div
            className="slider"
            onClick={() => {
              scrollToCoach("gitlan");
            }}
          >
            <img src={gitlan} /> <div className="overlay"></div>{" "}
          </div>
          <div
            className="slider"
            onClick={() => {
              scrollToCoach("dinica");
            }}
          >
            <img src={dinica} /> <div className="overlay"></div>{" "}
          </div>
        </Carousel>
        ;
        <div className="coach-info">
          {/* {showVideo ? <button className='backButton' onClick={handleBackButton}> <b> inapoi </b></button> : <> </>} */}
          {/* <img src={banner}/> */}

          <img src={coachData[coach]["newBanner1"]} className="new-banner" />
          <img src={coachData[coach]["newBanner2"]} className="info-banner" />
        </div>
        <div className="coach-images to-observe">
          <div className="spacer-div"></div>
          <img src={coachData[coach]["photo2"]} className="center" />
          <img
            src={coachData[coach]["photo1"]}
            className="left parallax-image to-observe hidden"
            data-speed="0.4"
          />
          <img
            src={coachData[coach]["photo3"]}
            className="right parallax-image to-observe hidden"
            data-speed="-0.4"
          />
        </div>
        {/* <div className='images'>
                    <img src={coachData[coach]["photo2"]} className='center to-observe hidden'/>
                    <img src={coachData[coach]["photo1"]} className='left parallax-image to-observe hidden' data-speed="0.4" />
                    <img src={coachData[coach]["photo3"]} className='right parallax-image to-observe hidden' data-speed="-0.4" />
                </div> */}
      </div>
    </div>
  );
}

export default Antrenori;
