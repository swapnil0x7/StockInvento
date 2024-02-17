/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
// import Sales from "../../assets/img/Sales.png";
// import React from 'react'

const Card = ({ cardData }) => {
  console.log("cardData", cardData);
  return (
    <div className="flex justify-between w-full h-28">
    {cardData?.map((item) => (
      <div className="flex flex-col items-center  w-full" key={item.id}>
        <div className="m-2 w-10">
          <img
            src={item.img}
            alt="Icon"
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-row  flex-wrap justify-center">
          <p className="flex justify-between items-center text-lg ">
            <Icon icon="mdi:rupee" /> {item?.data}
          </p>
          <p className="text-lg m-2 ">{item?.label}</p>
        </div>
      </div>
    ))}
  </div>
  
  );
};

export default Card;
