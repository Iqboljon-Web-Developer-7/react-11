import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Home from "./home/Home";
import Product from "@/components/product/Product";
import Account from "./account/Account";
import Wishlist from "./wishlist/Wishlist";
import Layout from "@/components/layout/Layout";

const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="account" element={<Account />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
    </>
  );
};

export default Pages;
