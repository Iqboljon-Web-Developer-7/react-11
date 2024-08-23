import React from "react";

import img from "@/assets/logo.svg";

import location from "@/assets/footer/location.svg";
import support from "@/assets/footer/support.svg";
import email from "@/assets/footer/email.svg";
import clock from "@/assets/footer/clock.svg";

import googlePlay from "@/assets/footer/google-play.svg";
import appStore from "@/assets/footer/app-store.svg";

import payment from "@/assets/footer/payment.svg";

const Footer = () => {
  return (
    <footer className="p-4 text-slate-800 duration-200">
      <div className="footer__wrapper wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[4.2fr_3fr_3fr_3fr_3fr_4fr] gap-2 p-1 text-sm text-[#253D4E] font-light">
        <div className="footer--item">
          <img src={img} className="max-w-[13rem]" alt="website logo" />
          <p className="my-4 w-5/6">Awesome grocery store website template</p>
          <div className="grid gap-2">
            <p className="flex items-start gap-2">
              <img src={location} className="max-w-[1rem]" alt="icon" />{" "}
              Address: 5171 W Campbell Ave undefined Kent, Utah 53127 United
              States
            </p>
            <p className="flex items-start gap-2">
              <img src={support} className="max-w-[1rem]" alt="icon" /> Call
              Us:(+91) - 540-025-124553
            </p>
            <p className="flex items-start gap-2">
              <img src={email} className="max-w-[1rem]" alt="icon" />{" "}
              Email:sale@Nest.com
            </p>
            <p className="flex items-start gap-2">
              <img src={clock} className="max-w-[1rem]" alt="icon" />{" "}
              Hours:10:00 - 18:00, Mon - Sat
            </p>
          </div>
        </div>
        <div className="footer--item flex flex-col">
          <h3 className="text-slate-500">Company</h3>
          <div className="grid gap-3 mt-1">
            <a href="#">About Us</a>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact Us</a>
            <a href="#">Support Center</a>
            <a href="#">Careers</a>
          </div>
        </div>

        <div className="footer--item">
          <h3 className="text-xl mt-2 font-semibold font-Quicksand">Account</h3>
          <div className="grid gap-3 mt-4">
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help Ticket</a>
            <a href="#">Shipping Details</a>
            <a href="#">Compare products</a>
          </div>
        </div>

        <div className="footer--item">
          <h3 className="text-xl mt-2 font-semibold font-Quicksand">
            Corporate
          </h3>
          <div className="grid gap-3 mt-4">
            <a href="#">Become a Vendor</a>
            <a href="#">Affiliate Program</a>
            <a href="#">Farm Business</a>
            <a href="#">Farm Careers</a>
            <a href="#">Our Suppliers</a>
            <a href="#">Accessibility</a>
            <a href="#">Promotions</a>
          </div>
        </div>

        <div className="footer--item">
          <h3 className="text-xl mt-2 font-semibold font-Quicksand">Popular</h3>
          <div className="grid gap-3 mt-4">
            <a href="#">Milk & Flavoured Milk</a>
            <a href="#">Butter and Margarine</a>
            <a href="#">Eggs Substitutes</a>
            <a href="#">Marmalades</a>
            <a href="#">Sour Cream and Dips</a>
            <a href="#">Tea & Kombucha</a>
            <a href="#">Cheese</a>
          </div>
        </div>
        <div className="footer--item">
          <h3 className="text-xl mt-2 font-semibold font-Quicksand">
            Install App
          </h3>
          <p className="my-3">From App Store or Google Play</p>
          <div className="imgs flex gap-2 pr-3 mt-6 flex-col xl:flex-row">
            <img src={googlePlay} className="max-w-44" alt="img google play" />
            <img src={appStore} className="max-w-44" alt="img app store" />
          </div>
          <p className="mt-12">Secured Payment Gateways</p>
          <img src={payment} className="mt-3" alt="img of credit cart types" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
