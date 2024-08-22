import { useStateValue } from "@/context";
import React from "react";

import img1 from "@/assets/services/1.svg";
import img2 from "@/assets/services/2.svg";
import img3 from "@/assets/services/3.svg";
import img4 from "@/assets/services/4.svg";
import img5 from "@/assets/services/5.svg";

const imgs = [img1, img2, img3, img4, img5];

const Services = () => {
  const [state, dispatch] = useStateValue();

  return (
    <section className="services grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 my-8">
      {state?.services.map((item, idx) => (
        <div
          key={idx}
          className="service flex gap-4 p-4 rounded-lg bg-[#F4F6FA]"
        >
          <div className="service__img">
            <img src={imgs[idx]} className="max-w-14" alt="" />
          </div>
          <div className="service__info">
            <h4 className="text-[#242424]">{item.title}</h4>
            <p className="text-[1rem]">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
