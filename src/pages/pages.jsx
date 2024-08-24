import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Product from "@/components/product/Product";
import Account from "./account/Account";
import Wishlist from "./wishlist/Wishlist";
import Layout from "@/components/layout/Layout";
import Cart from "@/pages/cart/Cart";
import { useStateValue } from "@/context";
import Protect from "@/components/protect/Protect";
import Admin from "./admin/Admin";

const Pages = () => {
  const [state, dispatch] = useStateValue();
  const [userData, setUserData] = useState();

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="product/:id" element={<Product />} />
          <Route
            path="account"
            element={<Account setUserData={setUserData} />}
          />
          <Route
            path="wishlist"
            element={<Wishlist state={state} dispatch={dispatch} />}
          />
          <Route
            path="cart"
            element={<Cart state={state} dispatch={dispatch} />}
          />
          <Route path="/admin" element={<Protect userData={userData} />}>
            <Route path="" element={<Admin />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default Pages;
