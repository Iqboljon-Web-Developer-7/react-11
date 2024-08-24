import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import img from "@/assets/product/home.svg";
import logo from "@/assets/logo.svg";
import { useFetch } from "@/hooks/useFetch";
import { axiosFun } from "@/API";

const Account = ({ setUserData }) => {
  const [username, setUsername] = useState("emilys");
  const [userPassword, setUserPasswords] = useState("emilyspass");

  const data = {
    username,
    userPassword,
  };

  const navigate = useNavigate();

  const navigateHandler = (path) => {
    navigate(path);
  };

  const saveToken = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: data.username,
        password: data.userPassword,
        expiresInMins: 30, // optional, defaults to 60
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("userTokent", JSON.stringify(res.token));
      });
  };

  console.log(username);
  console.log(userPassword);

  console.log(data);

  return (
    <section className="wrapper mt-16 border-b-2 border-slate-100">
      <div className="product__info flex items-center text-sm my-4 gap-4">
        <Link to={"/"} className="flex items-center justify-center gap-2">
          <img src={img} className="max-w-4" alt="img of home" />
          <span className="text-[#3BB77E]">Home</span>
        </Link>{" "}
        <span className="text-slate-300">/</span>
        <p className="text-slate-300">Form</p>
      </div>
      <div className="min-h-[77vh] flex items-center justify-center">
        <form
          className="p-5 border min-w-[25rem]"
          onSubmit={(e) => {
            e.preventDefault();
            setUserData(data);
            navigateHandler("/admin");
            saveToken();
          }}
        >
          <img
            src={logo}
            className="max-w-[11.25rem] mx-auto"
            alt="img of website logo"
          />
          <div className="form--item grid mt-6">
            <label htmlFor="username" className="text-sm font-light">
              Username*
            </label>
            <input
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="username"
              placeholder="Enter Your Email"
              className="text-[1rem] p-2 mt-2 border rounded-md"
            />
          </div>
          <div className="form--item grid mt-4">
            <label htmlFor="password" className="text-sm font-light">
              Password**
            </label>
            <input
              required
              value={userPassword}
              onChange={(e) => setUserPasswords(e.target.value)}
              type="password"
              id="password"
              placeholder="Enter Your Password"
              className="text-[1rem] p-2 mt-2 border rounded-md"
            />
          </div>
          <div className="form--item mt-6 flex justify-between items-center">
            <div className="remember flex gap-2">
              <input id="remember" type="checkbox" />
              <label
                htmlFor="remember"
                className="text-sm font-light text-[#777777]"
              >
                Remember Me
              </label>
            </div>
            <a href="#" className="font-light text-sm text-[#777777]">
              Forgot Password?
            </a>
          </div>
          <div className="form--item mt-6 flex items-center justify-between">
            <button className="bg-[#3BB77E] hover:bg-[#3ee77E] duration-200 text-slate-100 text-sm p-2 px-4 rounded-md">
              Login
            </button>
            <a href="#" className="font-light text-sm text-[#777777]">
              Signup?
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Account;
