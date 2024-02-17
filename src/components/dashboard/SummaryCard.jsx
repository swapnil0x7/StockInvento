// import React from 'react'

import Card from "./Card";
import Quantity from "../../assets/img/Quantity.png";

const SummaryCard = ({title}) => {
  return (
    <div className="container">
      <div className="bg-white p-3 rounded-lg m-2">
        <h1 className="font-bold text-xl mb-4 ml-4">{title}</h1>
        <div className="flex flex-grow gap-2 mb-2">
          <Card cardData={Summary} />
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;

const Summary = [
  { id: 1, img: Quantity, data: "123", label: "Quantity in Hand" },
  { id: 2, img: Quantity, data: "123", label: "Quantity in Hand" },
];
