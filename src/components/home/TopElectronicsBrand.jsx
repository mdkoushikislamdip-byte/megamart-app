import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronRight } from "react-icons/bi";

const TopElectronicsBrand = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    appendDots: (dots) => (
      <div className="absolute bottom-2 w-full">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-2 md:w-4 h-2 md:h-4 bg-black rounded-full"></div>
    ),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-white mt-2 md:mt-25 relative">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-primary/30 relative after:absolute after:w-96 after:h-1 after:left-0 after:bottom-0 after:rounded-full after:bg-brand">
          <h2 className="text-sm md:text-xl font-bold">
            Top <span className="text-brand">Electronics Brands</span>
          </h2>
          <button className="flex justify-between items-center text-sm text-gray-600 hover:text-blue-500">
            View All <BiChevronRight className="text-2xl text-brand" />
          </button>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          <div className="px-2">
            <img src="/iphone.png" alt="iphone" className="w-full" />
          </div>
          <div className="px-2">
            <img src="/xiaomi.png" alt="xiaomi" className="w-full" />
          </div>
          <div className="px-2">
            <img src="/realme.png" alt="realme" className="w-full" />
          </div>
          <div className="px-2">
            <img src="/iphone.png" alt="iphone" className="w-full" />
          </div>
          <div className="px-2">
            <img src="/xiaomi.png" alt="xiaomi" className="w-full" />
          </div>
          <div className="px-2">
            <img src="/realme.png" alt="realme" className="w-full" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default TopElectronicsBrand;