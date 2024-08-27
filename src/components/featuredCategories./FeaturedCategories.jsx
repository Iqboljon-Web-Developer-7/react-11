import { useStateValue } from "@/context";
import React from "react";

import img1 from "@/assets/featuredCategories/1.svg";
import img2 from "@/assets/featuredCategories/2.svg";
import img3 from "@/assets/featuredCategories/3.svg";
import img4 from "@/assets/featuredCategories/4.svg";
import img5 from "@/assets/featuredCategories/5.svg";
import img6 from "@/assets/featuredCategories/6.svg";
import img7 from "@/assets/featuredCategories/7.svg";
import img8 from "@/assets/featuredCategories/8.svg";
import img9 from "@/assets/featuredCategories/9.svg";
import img10 from "@/assets/featuredCategories/10.svg";

const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const FeaturedCategories = () => {
  const [state, dispatch] = useStateValue();

  return (
    <section className="my-8 sm:my-10 md:my-16 featured-categories">
      <div className="featured-categories__info flex flex-col md:flex-row items-center md:items-end gap-2 md:gap-5">
        <h2 className="text-2xl font-Quicksand font-semibold text-[#253D4E] dark:text-slate-100">
          Featured Categories
        </h2>
        <div className="categories flex gap-3 sm:gap-5 flex-wrap justify-center text-sm ">
          {state?.featuredCategories.map((item, idx) => (
            <p key={idx} className="dark:text-slate-200">
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="featured-categories__container mt-8 flex items-center gap-2 overflow-x-auto">
        {state?.featuredCategoriesItems.map((item, idx) => (
          <div
            key={idx}
            className={`featured-categories--item text-center rounded-xl py-4 px-5 shrink-0`}
            style={{ backgroundColor: item.bg }}
          >
            <img
              src={imgs[idx]}
              className="h-20 w-20 mx-auto"
              alt="img of food"
            />
            <h4 className="font-Quicksand text-[1rem] font-semibold text-[#253D4E]">
              {item.title}
            </h4>
            <p className="text-sm text-[#7E7E7E]">
              <span>{item.quantity}</span> items
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
