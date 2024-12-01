// //44.424, 26.017
// //44.415073, 26.038672
// //44.434490, 26.018763
//415869446, 26.02445477251617
import GoogleMapReact from "google-map-react";
import React from "react";
import pin_icon from "./images/pin-icon.png";

const GoogleMap = () => {
  const markers = [
    { lat: 44.415073, lng: 26.038672, name: "locatia ghencea" },
    { lat: 44.433334, lng: 26.024454, name: "locatia militari" },
  ];

  return (
    <div
      style={{
        maxHeight: "650px",
        width: "90%",
        aspectRatio: "16/9",
        marginLeft: "5%",
        marginRight: "5%",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDL64PUyRAPHc1cnzTZ2PA8WbeN6yEaN6g" }}
        defaultCenter={{ lat: 44.424, lng: 26.03 }}
        defaultZoom={window.innerWidth < 640 ? 12 : 14}
      >
        <Marker
          lat={44.415073}
          lng={26.038672}
          link="https://www.google.com/maps/place/Stoica+Brothers+Fight+Academy/@44.415088,26.0362179,17z/data=!3m1!4b1!4m6!3m5!1s0x40b201e80ac34baf:0x6ca18a61316a236!8m2!3d44.415088!4d26.0387928!16s%2Fg%2F11py0fs58d?entry=ttu"
          text="Locatie Ghencea"
        />
        <Marker
          lat={44.433334}
          lng={26.024454}
          link="https://www.google.com/maps/place/44%C2%B026'04.2%22N+26%C2%B001'07.6%22E/@44.43449,26.0161881,17z/data=!3m1!4b1!4m4!3m3!8m2!3d44.43449!4d26.018763?entry=ttu"
          text="Locatie Militari"
        />
      </GoogleMapReact>
    </div>
  );
};

const Marker = ({ link, text }) => (
  <div
    style={{
      position: "absolute",
      transform: "translate(-50%, -100%)",
      top: "0",
      left: "0",
    }}
  >
    <a href={link} target="__blank">
      <img src={pin_icon} style={{ width: "40px", height: "40px" }} />
      <p
        style={{
          color: "red",
          whiteSpace: "nowrap",
          position: "absolute",
          fontSize: "16px",
        }}
      >
        {text}
      </p>
    </a>
  </div>
);

export default GoogleMap;
