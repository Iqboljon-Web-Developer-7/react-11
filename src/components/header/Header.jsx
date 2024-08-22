import React, { useState, useEffect, useRef, memo } from "react";
import { Link } from "react-router-dom";
import MobileNav from "../mobileNav/MobileNav";

import "./Header.scss";

import { RiMenu5Line } from "react-icons/ri";
import { IoIosSunny } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

import logo from "@/assets/logo.svg";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTheme(JSON.parse(localStorage.getItem("theme")) || "light");
    return () => window.addEventListener("scroll", handleScroll);
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
        <div className="header__form hidden lg:flex border border-lime-500 p-2 grow rounded-sm">
          <select name="categories" className="bg-transparent text-[.875rem]">
            <option value="">ALL Categories</option>
            <option value="beauty">Beauty</option>
            <option value="fragrances">Fragrances</option>
            <option value="furniture">Furniture</option>
            <option value="groceries">Groceries</option>
            <option value="home-decoration">Home Decoration</option>
            <option value="kitchen-accessories">Kitchen Accessories</option>
            <option value="laptops">Laptops</option>
            <option value="mens-shirts">Men's Shirts</option>
            <option value="mens-shoes">Men's Shoes</option>
            <option value="mens-watches">Men's Watches</option>
            <option value="mobile-accessories">Mobile Accessories</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="skin-care">Skin Care</option>
            <option value="smartphones">Smartphones</option>
            <option value="sports-accessories">Sports Accessories</option>
            <option value="sunglasses">Sunglasses</option>
            <option value="tablets">Tablets</option>
            <option value="tops">Tops</option>
            <option value="vehicle">Vehicle</option>
            <option value="womens-bags">Women's Bags</option>
            <option value="womens-dresses">Women's Dresses</option>
            <option value="womens-jewellery">Women's Jewellery</option>
            <option value="womens-shoes">Women's Shoes</option>
            <option value="womens-watches">Women's Watches</option>
          </select>
          <form className="flex items-center justify-between w-full">
            <input
              type="text"
              placeholder="Search for items..."
              className="bg-transparent pl-4 ml-4 border-l-2 w-4/5 outline-none border-none text-[.875rem]"
            />
            <CiSearch />
          </form>
        </div>
        <select className="bg-transparent hidden lg:block text-[.875rem] text-[#3BB77E] outline-none">
          <option value="" className="">
            Your Location
          </option>
        </select>
        <div className="header__contact flex items-center justify-center gap-3">
          <Link
            to={"/wishList"}
            className="flex items-center justify-center gap-1"
          >
            <FaRegHeart className="text-2xl" />
            <sub>Wishlist</sub>
          </Link>
          <Link to={"/cart"} className="flex items-center justify-center gap-1">
            <IoCartOutline className="text-2xl" />
            <sub>Cart</sub>
          </Link>
          <div className="modes flex gap-3 text-3xl cursor-pointer">
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
            className="lg:hidden text-3xl"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
