// import React from 'react'

import Card from "./Card";
import Sales from "../../assets/img/Sales.png"

const OverViewCard = ({title}) => {
  return (
    <div className="container">
      <div className="bg-white p-3 rounded-lg m-2">
        <h1 className="font-bold text-xl mb-4 ml-4">{title}</h1>
        <div className="flex flex-grow gap-2 mb-2">
          <Card  cardData ={OVCardData} />
        </div>
      </div>
    </div>
  );
};

export default OverViewCard;
const OVCardData =[
    {id:1,
    img:Sales,
    label:"Sales",
    data:"123" 
},
{id:2,
    img:Sales,
    label:"Sales" ,
    data:"123" 
},
{id:3,
    img:Sales,
    label:"Sales" ,
    data:"123" 
},
{id:4,
    img:Sales,
    label:"Sales" ,
    data:"123" 
},
]
