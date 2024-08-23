import React from "react";

const Categories = ({ categories, setPath }) => {
  return (
    <div className="products__info my-4 mt-12 flex flex-col md:flex-row justify-between items-center">
      <h3 className="text-2xl font-bold mb-3 font-Quicksand text-[#253D4E]">
        Popular Products
      </h3>
      <div className="flex gap-2 sm:gap-5 flex-wrap justify-center">
        <p className="text-sm cursor-pointer" onClick={() => setPath(``)}>
          All
        </p>
        {categories?.slice(0, 5).map((item, idx) => (
          <p
            key={idx}
            onClick={() => setPath(`/category/${item}`)}
            className="text-sm cursor-pointer capitalize"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Categories;
