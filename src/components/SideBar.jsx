// import React from 'react'
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { Icon } from "@iconify/react";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className=" relative bg-white flex flex-col   h-screen w-60">
      <div className="flex items-center p-2 ml-5 mb-5 cursor-pointer ">
        <img src={Logo} alt="logo" />
        <h3 className="text-blue-500  font-bold text-3xl ml-2">KANBAN</h3>
      </div>
      <div>
        {data.map((item) => (
          <p
            onClick={() => navigate("/")}
            key={item.id}
            className=" ml-4 flex items-center p-2 text-xl font-bold text-blue-500 cursor-pointer hover:z-10 transform transition-transform hover:scale-110"
          >
            <Icon
              icon={item.icon}
              style={{ marginRight: 20, marginLeft: 10 }}
              fontSize={30}
            />
            {item.title}
          </p>
        ))}
      </div>
      <div className="justify-end absolute bottom-4">
        <p className=" ml-4 flex items-center p-2 text-xl font-bold text-slate-600 cursor-pointer hover:z-10 transform transition-transform hover:scale-110">
          <Icon
            icon="solar:settings-bold-duotone"
            style={{ marginRight: 20, marginLeft: 10 }}
            fontSize={30}
          />
          Settings
        </p>
        <p className=" ml-4 flex items-center p-2 text-xl font-bold text-slate-600 cursor-pointer hover:z-10 transform transition-transform hover:scale-110">
          <Icon
            icon="solar:logout-3-bold-duotone"
            style={{ marginRight: 20, marginLeft: 10 }}
            fontSize={30}
          />
          Log Out
        </p>
      </div>
    </div>
  );
};

export default SideBar;

const data = [
  { id: 1, icon: "lets-icons:home-duotone", title: "Dashboard", url: "" },
  { id: 2, icon: "ic:twotone-inventory", title: "Inventory", url: "" },
  { id: 3, icon: "icon-park-solid:table-report", title: "Reports", url: "" },
  { id: 4, icon: "carbon:customer", title: "Suppliers", url: "" },
  { id: 5, icon: "material-symbols-light:orders", title: "Orders", url: "" },
  {
    id: 6,
    icon: "lets-icons:order-duotone-line",
    title: "Manage Store",
    url: "",
  },
];
