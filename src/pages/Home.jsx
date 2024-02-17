import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <div className="bg-slate-200 flex">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Home;
