import React from "react";

const NotFound = ({ img, title }) => {
  return (
    <div className="my-10">
      <h3 className="text-2xl text-center text-red-500">{title}</h3>
      <img className="max-w-4xl mx-auto" src={img} alt="" />
    </div>
  );
};

export default NotFound;
