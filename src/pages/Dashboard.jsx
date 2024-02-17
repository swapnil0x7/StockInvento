// import React from 'react'

import LowQuantityStocks from "../components/dashboard/LowQuantityStocks";
import OverViewCard from "../components/dashboard/OverViewCard";
import StockTable from "../components/dashboard/StockTable";
import SummaryCard from "../components/dashboard/SummaryCard";

const Dashboard = () => {
  const handleSeeAllClick = () => {
    console.log("Clicked");
  };
  return (
    <div className="container mx-auto">
      <div className=" m-1 grid  grid-cols-12 gap-2  ">
        <div className="md:col-span-8 ">
          <OverViewCard title="Sales Overview" />
        </div>
        <div className="md:col-span-4 ">
          <SummaryCard title="Inventory Summary" />
        </div>
      </div>
      <div className=" m-1 grid  grid-cols-12 gap-2  ">
        <div className="md:col-span-8 ">
          <OverViewCard title="Purchase Overview" />
        </div>
        <div className="md:col-span-4 ">
          <SummaryCard title="Product Summary" />
        </div>
      </div>
      <div className=" m-1 grid  grid-cols-12 gap-2  ">
        <div className="md:col-span-8 ">
          <div className="bg-white px-2 m-2 rounded-lg">
            <div className="flex justify-between px-2 py-5 ">
              <h1 className="font-bold text-lg">Top Selling Stock</h1>
              <button
                className="font-bold text-lg text-blue-500"
                onClick={handleSeeAllClick}
              >
                See All
              </button>
            </div>
            <StockTable />
          </div>
        </div>
        <div className="md:col-span-4 ">
          <div className="bg-white px-2 m-2 rounded-lg">
            <div className="flex justify-between px-2 py-5 ">
              <h1 className="font-bold text-lg">Top Selling Stock</h1>
              <button
                className="font-bold text-lg text-blue-500"
                onClick={handleSeeAllClick}
              >
                See All
              </button>
            </div>
            <LowQuantityStocks data ={LowStocksData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

const LowStocksData = [
  {
    id: 1,
    name: "Tata Salt",
    remaining: "10",
    img: "https://fattaak.in/cdn/shop/files/1_5b1d9d1e-0fc9-4f01-850d-409d517667d8.webp?v=1690298588",
  },
  {
    id: 2,
    name: "Lays",
    remaining: "10",
    img: "https://www.urbangroc.com/wp-content/uploads/2021/05/Lays-Chips-Indias-Magic-Masala-01.jpg.webp",
  },
  {
    id: 3,
    name: "Tata Salt",
    remaining: "10",
    img: "https://fattaak.in/cdn/shop/files/1_5b1d9d1e-0fc9-4f01-850d-409d517667d8.webp?v=1690298588",
  },
];
