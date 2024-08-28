import React, { useState, useEffect, useRef, memo } from "react";
import { Link } from "react-router-dom";
import MobileNav from "../mobileNav/MobileNav";

import "./Header.scss";

import { RiMenu5Line } from "react-icons/ri";
import { IoIosSunny } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { RiUser3Line } from "react-icons/ri";

import logo from "@/assets/logo.svg";
import Search from "../search/Search";

const Header = ({ wishlist, cart, token }) => {
  const [theme, setTheme] = useState("light");
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTheme(JSON.parse(localStorage.getItem("theme")) || "light");
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [theme]);

  const handleScroll = () => {
    window.scrollY > 110 && setIsHeaderFixed(true);
    window.scrollY < 110 && setIsHeaderFixed(false);
  };

  const themeSwitcher = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem(
      "theme",
      JSON.stringify(theme === "light" ? "dark" : "light")
    );
  };

  return (
    <header
      className={`header__container bg-[#ffffff] dark:bg-slate-800 dark:text-slate-100 duration-200 ${
        isHeaderFixed && "h-[4.6rem]"
      } `}
    >
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`header wrapper flex justify-between items-center gap-6 py-5 h-[4.6rem] duration-200 z-10 ${
          isHeaderFixed &&
          "fixed max-w-[initial] animate-fadein shadow-md bg-[#F8F8F866] dark:bg-[#00000066] backdrop-blur-sm"
        } inset-[0_0_auto_0]`}
      >
        <div className="header__logo">
          <Link to={"/"}>
            <img src={logo} className="duration-200" alt="" />
          </Link>
        </div>
        <Search />
        <select className="bg-transparent hidden lg:block text-[.875rem] text-[#3BB77E] outline-none">
          <option value="" className="">
            Your Location
          </option>
        </select>
        <div className="header__contact flex items-center justify-center gap-1 sm:gap-2">
          <Link
            to={"/wishList"}
            className="flex items-center justify-center relative"
          >
            <FaRegHeart className="text-xl sm:text-2xl"></FaRegHeart>
            <sub className="text-[.8rem] sm:text-base text-slate-400">
              Wishlist
            </sub>
            {wishlist.length > 0 && (
              <span className="absolute min-w-4 text-center bg-red-500 text-white leading-3 p-[.12rem] rounded-full inset-[-.5rem_auto_auto_.66rem] text-[.66rem]">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link
            to={"/cart"}
            className="flex items-center justify-center relative"
          >
            <IoCartOutline className="text-xl sm:text-2xl" />
            <sub className="text-slate-400 text-[.8rem] sm:text-base">Cart</sub>
            {cart.length > 0 && (
              <span className="absolute min-w-4 text-center bg-green-500 text-white leading-3 p-[.12rem] rounded-full inset-[-.5rem_auto_auto_.7rem] text-[.66rem]">
                {cart.length}
              </span>
            )}
          </Link>
          <Link
            to={`/${token ? "admin" : "account"}`}
            className="flex items-center justify-center"
          >
            <RiUser3Line className="sm:text-2xl" />
            <sub className="text-[.8rem] sm:text-base text-slate-400">
              {token ? "Admin" : "Register"}
            </sub>
          </Link>
          <div className="modes flex gap-3 text-xl sm:text-3xl cursor-pointer">
            <IoIosSunny
              onClick={themeSwitcher}
              className={`${theme == "light" && "hidden"}`}
            />
            <MdOutlineDarkMode
              onClick={themeSwitcher}
              className={`${theme == "dark" && "hidden"}`}
            />
          </div>
          <RiMenu5Line
            className="lg:hidden text-2xl sm:text-3xl"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
