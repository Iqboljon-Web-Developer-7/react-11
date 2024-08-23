import Ads from "@/components/ads/Ads";
import Categories from "@/components/categories/Categories";
import FeaturedCategories from "@/components/featuredCategories./FeaturedCategories";
import Hero from "@/components/hero/Hero";
import Products from "@/components/products/Products";
import Services from "@/components/services/Services";
import { useStateValue } from "@/context";
import { useFetch } from "@/hooks/useFetch";
import React, { useState } from "react";

const Home = () => {
  const [path, setPath] = useState("");
  const [category, setCategory] = useState("");
  const [state, dispatch] = useStateValue();
  const { data } = useFetch(`/products${path}`, { limit: 10 }, [
    path,
    category,
  ]);
  const { data: categories } = useFetch("/products/category-list");

  return (
    <div className="wrapper font-Lato scroll-smooth">
      <Hero state={state} />
      <FeaturedCategories />
      <Ads />
      <Categories categories={categories} setPath={setPath} />
      <Products
        dispatch={dispatch}
        data={data?.products}
        wishlist={state.wishlist}
        path={path}
        setPath={setPath}
      />
      <Hero state={state} />
      <Services />
    </div>
  );
};

export default Home;
