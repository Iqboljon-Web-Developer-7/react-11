import Ads from "@/components/ads/Ads";
import Categories from "@/components/categories/Categories";
import FeaturedCategories from "@/components/featuredCategories./FeaturedCategories";
import Hero from "@/components/hero/Hero";
import Products from "@/components/products/Products";
import Services from "@/components/services/Services";
import { useStateValue } from "@/context";
import { useFetch } from "@/hooks/useFetch";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Home = () => {
  const [skip, setSkip] = useState(0);
  const [path, setPath] = useState("");
  const [category, setCategory] = useState("");
  const [state, dispatch] = useStateValue();
  const { data } = useFetch(
    `/products${path}`,
    { limit: 10, skip: (skip - 1) * 10 },
    [path, category, skip]
  );

  if (state.token == null) {
    return <Navigate replace to={"/account"} />;
  }

  const { data: categories } = useFetch("/products/category-list");

  return (
    <div className="wrapper font-Lato">
      <Hero state={state} />
      <FeaturedCategories />
      <Ads />
      <Categories categories={categories} setPath={setPath} />
      <Products
        dispatch={dispatch}
        data={data?.products}
        wishlist={state.wishlist}
        cart={state.cart}
        path={path}
        setPath={setPath}
        total={data?.total}
        setSkip={setSkip}
      />
      <Hero state={state} />
      <Services />
    </div>
  );
};

export default Home;
