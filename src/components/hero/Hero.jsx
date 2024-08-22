import React from "react";

import CarouselItem from "../carouselitem/CarouselItem";
import bgImage from "@/assets/carousel/carousel-img1.png";
import { useStateValue } from "@/context";

const Hero = ({ state }) => {
  return (
    <section className="hero__carousel flex mt-10 overflow-x-auto">
      {state?.carousel.map((item, idx) => (
        <CarouselItem
          key={idx}
          title={item.title}
          subTitle={item.subTitle}
          bgImage={bgImage}
        />
      ))}
    </section>
  );
};

export default Hero;
