import Ads from "@/components/ads/Ads";
import FeaturedCategories from "@/components/featuredCategories./FeaturedCategories";
import Hero from "@/components/hero/Hero";
import Products from "@/components/products/Products";
import Services from "@/components/services/Services";
import { useStateValue } from "@/context";
import React from "react";

const Home = () => {
  const [state, dispatch] = useStateValue();
  return (
    <div className="wrapper font-Lato">
      <Hero state={state} />
      <FeaturedCategories />
      <Ads />
      <Products />
      <Hero state={state} />
      <Services />
    </div>
  );
};

export default Home;
