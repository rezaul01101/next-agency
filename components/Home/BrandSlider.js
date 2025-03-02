"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliders from "@/utils/data/slider";
import Image from "next/image";

const BrandSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="h-[135px] bg-slate-900 w-full flex items-center">
      <div className="container mx-auto ">
        <Slider {...settings}>
          {sliders?.map((slider) => (
            <div key={slider.id} className="flex justify-center items-center">
              <Image src={slider.image} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BrandSlider;
