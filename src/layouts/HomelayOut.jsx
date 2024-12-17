import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftsideBar from "./LeftsideBar";
import RightSideBar from "./RightSideBar";
import { Outlet } from "react-router-dom";

const HomelayOut = () => {
  return (
    <div className="w-10/12 mx-auto my-5 font-poppins">
      <header>
        <Header></Header>
        <LatestNews></LatestNews>
        <Navbar></Navbar>
      </header>
      <main className="grid grid-cols-9 my-20 gap-6 justify-between">
        <aside className="col-span-2">
          <LeftsideBar></LeftsideBar>
        </aside>
        <section className="col-span-5">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-2">
          <RightSideBar></RightSideBar>
        </aside>
      </main>
    </div>
  );
};

export default HomelayOut;
