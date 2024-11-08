import React, { useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useStateValue } from "@/context";

const Layout = () => {
  const [state, dispatch] = useStateValue();

  const navigate = useNavigate();
  const navigateHandler = (path) => {
    navigate(path);
  };

  console.log(state.token);

  useEffect(() => {
    if (state.token == "") navigateHandler("/account");
  }, [state.token]);

  return (
    <>
      <Header wishlist={state.wishlist} cart={state.cart} token={state.token} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
