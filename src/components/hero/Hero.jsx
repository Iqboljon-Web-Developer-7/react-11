import React from "react";

import CarouselItem from "../carouselitem/CarouselItem";
import bgImage from "@/assets/carousel/carousel-img1.png";
import bgImage1 from "@/assets/carousel/carousel-img2.jpg";
import bgImage2 from "@/assets/carousel/carousel-img3.jpg";

const imgs = [bgImage, bgImage1, bgImage2];

const Hero = ({ state }) => {
  return (
    <section className="hero__carousel flex mt-4 sm:mt-8 md:mt-10 overflow-x-auto">
      {state?.carousel.map((item, idx) => (
        <CarouselItem
          key={idx}
          title={item.title}
          subTitle={item.subTitle}
          bgImage={imgs[idx]}
          idx={idx}
          // classStyle={
          //   idx != 1
          //     ? { heading: "text-[#253D4E]", paragraph: "text-[#7E7E7E]" }
          //     : { heading: "text-slate-200", paragraph: "text-slate-300" }
          // }
        />
      ))}
    </section>
  );
};

export default Hero;
