import React from "react";
import Slider from "react-slick";

//Components
import PictureCarouselCard from "../PictureCarouselCard";
import { NextArrow, PrevArrow } from "../CarouselArrow";

const DiningCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        <PictureCarouselCard />
        <PictureCarouselCard />
        <PictureCarouselCard />
        <PictureCarouselCard />
        <PictureCarouselCard />
        <PictureCarouselCard />
        <PictureCarouselCard />
        <PictureCarouselCard />
      </Slider>
    </div>
  );
};

export default DiningCarousel;
