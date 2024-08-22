import { useFetch } from "@/hooks/useFetch";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { BiShuffle } from "react-icons/bi";

import img from "@/assets/product/home.svg";
import cartImg from "@/assets/product/cart.svg";
import Rating from "../rating/Rating";
import Hero from "../hero/Hero";
import { useStateValue } from "@/context";

const Product = () => {
  const { id } = useParams();
  const { data: product } = useFetch(`/products/${id}`);
  const [idx, setIdx] = useState(0);
  const [counter, setCounter] = useState(1);

  const [state, dispatch] = useStateValue();

  return (
    <>
      <section className="product wrapper my-20">
        <div className="product__info flex items-center text-sm my-4 gap-4">
          <Link to={"/"} className="flex items-center justify-center gap-2">
            <img src={img} className="max-w-4" alt="img of home" />
            <span className="text-[#3BB77E]">Home</span>
          </Link>{" "}
          <span className="text-slate-300">/</span>
          <Link className="text-[#3BB77E]" to={"products"}>
            Products
          </Link>
          <span className="text-slate-300">/</span>
          <p className="text-[#7E7E7E]">{product?.title}</p>
        </div>
        <div className="product__main flex justify-between flex-col lg:flex-row gap-10">
          <div className="product__main-imgs lg:w-2/4">
            <img
              src={product?.images[idx]}
              className="mx-auto max-w-[33rem] max-h-[33rem]"
              alt="img of product"
            />
            <div className="imgs-container flex justify-evenly gap-2">
              {product?.images.length > 1 &&
                product?.images.map((src, idx) => (
                  <img
                    key={idx}
                    className="max-w-28 p-2 border-2 cursor-pointer"
                    onClick={() => setIdx(idx)}
                    src={src}
                  />
                ))}
            </div>
          </div>
          <div className="product__main-info text-center lg:text-start lg:w-2/4">
            <h2 className="mt-4 text-4xl text-[#253D4E]">{product?.title}</h2>
            <div className="rating flex items-center justify-center lg:justify-start  mt-2 gap-2">
              <Rating rating={product?.rating} />
              <span className="text-[#B6B6B6] text-sm">
                ({product?.reviews.length} reviews)
              </span>
            </div>
            <div className="price mt-3 flex gap-3 justify-center lg:justify-start">
              <h4 className="main_price font-Quicksand text-[3.725rem] font-semibold text-[#3BB77E]">
                ${product?.price}
              </h4>
              <div className="old-price pt-5">
                <p className="text-[#FDC040] text-sm">
                  {product?.discountPercentage}% off
                </p>
                <p className="text-[#B6B6B6] text-2xl">
                  <del>
                    {" "}
                    {(
                      product?.price +
                      (product?.price / 100) * product?.discountPercentage
                    ).toFixed(2)}
                  </del>
                </p>
              </div>
            </div>
            <p className="my-5 text-[#7E7E7E] text-[1.0675rem]">
              {product?.description}
            </p>
            <div className="product__navigation flex gap-3 justify-center lg:justify-start">
              <div className="counter flex items-center border pl-4 pr-2 border-[#3BB77E]">
                <p className="min-w-6 h-5 leading-5">{counter}</p>
                <div className="btns flex items-center justify-center flex-col">
                  <button
                    onClick={() => setCounter((prev) => prev + 1)}
                    className="w-5 h-5 hover:text-orange-500 text-[#3BB77E] duration-200 rounded-full text-[.7rem] flex items-center justify-center"
                  >
                    <FaAngleUp />
                  </button>
                  <button
                    disabled={counter <= 1}
                    onClick={() => setCounter((prev) => prev - 1)}
                    className="w-5 h-5 hover:text-orange-500 text-[#3BB77E] duration-200 rounded-full text-[.7rem] flex items-center justify-center"
                  >
                    <FaAngleDown />
                  </button>
                </div>
              </div>
              <button className="py-2 px-4 rounded-md font-semibold text-white bg-[#3BB77E] flex items-center justify-center gap-2 text-sm">
                <img src={cartImg} alt="cart icon" className="w-4" />
                Add to cart
              </button>
              <button className="py-1 px-3 text-xl border border-gray-200 rounded-md">
                <CiHeart />
              </button>
              <button className="py-1 px-3 text-xl border border-gray-200 rounded-md">
                <BiShuffle />
              </button>
            </div>
            <div className="details grid grid-cols-2 w-fit gap-x-7 gap-y-2 mt-6 text-sm">
              <p className="text-[#3BB77E]">
                <span className="text-[#7E7E7E]">Type:</span>{" "}
                {product?.category}
              </p>
              <p className="text-[#3BB77E]">
                <span className="text-[#7E7E7E]">SKU:</span> {product?.sku}
              </p>
              <p className="text-[#3BB77E]">
                <span className="text-[#7E7E7E]">MFG:</span>{" "}
                {product?.meta["createdAt"]}
              </p>
              <p className="text-[#3BB77E] flex gap-1">
                <span className="text-[#7E7E7E]">Tags:</span>{" "}
                {product?.tags.map((item) => (
                  <span>{item}</span>
                ))}
                {console.log(product?.tags)}
              </p>
              <p className="text-[#3BB77E]">
                <span className="text-[#7E7E7E]">Life:</span> 1 month
              </p>
              <p className="text-[#3BB77E]">
                <span className="text-[#7E7E7E]">Stock:</span> {product?.stock}{" "}
                items in Stock
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="wrapper my-7">
        <Hero state={state} />
      </div>
    </>
  );
};

export default Product;
