import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import { useStateValue } from "@/context";

const Layout = () => {
  const [state, dispatch] = useStateValue();
  return (
    <>
      <Header wishlist={state.wishlist} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
