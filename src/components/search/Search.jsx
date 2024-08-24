import { useFetch } from "@/hooks/useFetch";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const [resultVisibility, setResultVisibility] = useState(false);
  const { data: result } = useFetch(
    `/products/search?q=${search}`,
    { limit: 10 },
    [search]
  );

  const navigate = useNavigate();
  const navigateHandler = (path) => {
    navigate(path);
  };

  return (
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
      <form className="flex items-center justify-between w-full relative">
        <input
          onFocus={() => setResultVisibility(true)}
          onChange={(e) => setSearch(e.target.value)}
          onBlur={() => {
            setSearch("");
            setTimeout(() => {
              setResultVisibility(false);
            }, 100);
          }}
          value={search}
          type="text"
          placeholder="Search for items..."
          className="bg-transparent pl-4 ml-4 border-l-2 w-4/5 outline-none border-none text-[.875rem]"
        />
        <CiSearch />
        <div
          className={`result ${
            resultVisibility ? "flex" : "hidden"
          } flex-col gap-1 max-h-72 rounded-2xl bg-green-100 overflow-y-auto backdrop-blur-sm text-sm absolute inset-[150%_0_auto_0]`}
        >
          {result?.products.map((item, idx) => (
            <p
              key={idx}
              className="py-1 px-3 border border-slate-400 text-slate-900 rounded-full"
              onClick={() => navigateHandler(`/product/${item.id}`)}
            >
              {item.title}
            </p>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Search;
