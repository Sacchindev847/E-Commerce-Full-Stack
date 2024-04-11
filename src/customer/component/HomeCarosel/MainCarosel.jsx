import React from "react";
import AliceCarousel from "react-alice-carousel";
import { mainCarouselData } from "./MainCaroselData";
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarosel = () => {
  const items = mainCarouselData.map((item) => (
    <img
      className="cursor-pointer rounded-md -z-30"
      src={item.image}
      alt=""
      role="presentation"
    />
  ));
  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
    />
  );
};

export default MainCarosel;
