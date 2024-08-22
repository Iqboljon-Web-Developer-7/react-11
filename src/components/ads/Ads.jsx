import React from "react";

import { AiOutlineArrowRight } from "react-icons/ai";

import img1 from "@/assets/ads/1.png";
import img2 from "@/assets/ads/2.png";
import img3 from "@/assets/ads/3.png";

const imgs = [img1, img2, img3];

const data = [
  "Everyday Fresh & Clean with Our Products",
  "Make your Breakfast Healthy and Easy",
  "The best Organic Products Online",
];

const Ads = () => {
  return (
    <section className="ads items-center gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data?.map((item, idx) => (
        <div
          key={idx}
          className="ads__item py-12 px-7 sm:py-14 sm:px-8 lg:py-16 lg:px-9 xl:py-20 xl:px-12 rounded-xl bg-cover"
          style={{ backgroundImage: `url(${imgs[idx]})` }}
        >
          <div className="ads__item--info max-w-64 grid gap-8">
            <h2 className="text-2xl">{item}</h2>
            <button className="py-2 px-3 text-sm text-white w-fit bg-[#3BB77E] rounded-lg flex items-center justify-center gap-3">
              Shop now <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Ads;
