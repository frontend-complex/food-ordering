/* eslint-disable react/prop-types */
import React from "react";

const DealCard = ({ image, type, title, offer, className }) => {
  return (
    <div className={`relative   ${className}`}>
      <img src={image} alt="" />
      <div className=" bg-gradient-to-tr from-[#03081f] to-transparent rounded-xl absolute inset-y-0 inset-x-0"></div>
      <span className="absolute top-0 right-3 text-white  rounded-b-xl py-5 p-5 bg-black">
        {offer}50%
      </span>
      <div className="absolute left-5 bottom-5">
        <p className="text-orange font-medium font-poppins text-lg ">{type}</p>
        <p className="text-white font-bold font-poppins text-2xl">{title}</p>
      </div>
    </div>
  );
};

export default DealCard;
