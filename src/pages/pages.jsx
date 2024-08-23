import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Home from "./home/Home";
import Product from "@/components/product/Product";
import Account from "./account/Account";
import Wishlist from "./wishlist/Wishlist";

const Pages = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/account" element={<Account />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Pages;
