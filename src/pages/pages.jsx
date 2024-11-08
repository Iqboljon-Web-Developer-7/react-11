import React from "react";
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
  const handleUserData = (userData) => {
    dispatch({ type: "SAVE_USER", userData });
  };

  return (
    <div className="dark:bg-slate-950 duration-200">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="product/:id" element={<Product />} />
          <Route
            path="wishlist"
            element={<Wishlist state={state} dispatch={dispatch} />}
          />
          <Route
            path="cart"
            element={<Cart state={state} dispatch={dispatch} />}
          />
          <Route path="/admin" element={<Protect userData={state.userData} />}>
            <Route path="" element={<Admin data={state.userData} />}></Route>
          </Route>
        </Route>
        <Route
          path="/account"
          element={<Account setUserData={handleUserData} dispatch={dispatch} />}
        />
      </Routes>
    </div>
  );
};

export default Pages;
