/* eslint-disable react/prop-types */
// import React from 'react'

const LowQuantityStocks = ({ data }) => {
  console.log("data", data);
  return (
    <>
      {data?.map((item) => (
        <div className="flex justify-between items-center p-2" key={item.id}>
          <div className="w-20">
            <img src={item.img} alt="" />
          </div>
          <div>
            <h1 className="font-bold text-lg">{item.name}</h1>
            <p>Remaning Quantity : {item.remaining} Packets</p>
          </div>
          <div className="bg-red-100 px-3 py-2 rounded-lg">
            <p className="font-bold text-red-800">Low</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default LowQuantityStocks;
