import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { Ship01Img } from "./Ships.jsx";
import { Ship02Img } from "./Ships.jsx";
import { Ship03Img } from "./Ships.jsx";
import { Ship04Img } from "./Ships.jsx";

export const OwlCarouselShips = () => {
  return (
    <OwlCarousel
      className="owl-theme"
      animateOut="fadeOut"
      // animateIn= ''
      autoplay
      autoplayHoverPause
      // center
      items={1}
      lazyLoad={true}
      loop
      nav
      navText={["&#x3C&#x3C Prev", "Next >>"]}
    >
      <div className="item">
        <img src={Ship01Img} alt=""/>
      </div>
      <div className="item">
        <img src={Ship02Img} alt=""/>
      </div>
      <div className="item">
        <img src={Ship03Img} alt=""/>
      </div>
      <div className="item">
        <img src={Ship04Img} alt=""/>
      </div>
    </OwlCarousel>
  );
};
