import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { NextArrow, PrevArrow } from "../ui/SliderArrows";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul className="hidden md:flex gap-2 absolute bottom-3 md:bottom-10 left-10 md:left-24">
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-2 md:w-4 h-2 md:h-4 bg-theme rounded-full"></div>
    ),
  };
  return (
    <section className="bg-">
      <div className="container">
        <Slider {...settings}>
          <div>
            <img
              className="w-full"
              src="/banner-watch.png"
              alt="banner-watch"
            />
          </div>
          <div>
            <img
              className="w-full"
              src="/banner-phone.png"
              alt="banner-phone"
            />
          </div>
          <div>
            <img
              className="w-full"
              src="/banner-watch.png"
              alt="banner-watch"
            />
          </div>
          <div>
            <img
              className="w-full"
              src="/banner-phone.png"
              alt="banner-phone"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Banner;
