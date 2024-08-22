import React from "react";

import { FaRegPaperPlane } from "react-icons/fa6";
// import bgImage from "@/assets/carousel/carousel-img1.png";

const CarouselItem = ({ title, subTitle, bgImage }) => {
  return (
    <div
      className="hero__carousel--item shrink-0 w-full bg-cover bg-- rounded-xl md:rounded-3xl p-6 sm:p-9 md:p-16 lg:p-24"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero__carousel--item-info max-w-[32rem]">
        <div className="grid gap-1 sm:gap-3 md:gap-4 lg:gap-5">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-Quicksand font-semibold text-[#253D4E]">
            {title}
          </h2>
          <p className="text-sm sm:text-[1rem] md:text-xl lg:text-2xl text-[#7E7E7E]">
            {subTitle}
          </p>
        </div>
        <form className="flex items-center justify-between mt-4 sm:mt-6 md:mt-8 lg:mt-10 bg-white max-w-96 rounded-full">
          <div className="flex items-center justify-center gap-3 py-1  px-3  md:py-2 md:px-[1rem] lg:py-[1rem]">
            <FaRegPaperPlane className="scale-90 text-gray-500" />
            <input
              type="email"
              placeholder="Your emaill address"
              className="text-[.875rem] outline-none border-none"
            />
          </div>
          <button className="py-[.5rem] px-[1.2rem] sm:py-[.8rem] sm:px-[1.2rem] md:py-[.88rem] md:px-[1.4rem] lg:py-[1rem] lg:px-[1.6rem] hover:brightness-110 duration-200 bg-[#3BB67E] rounded-full text-[.8rem] md:text-sm text-white">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default CarouselItem;
