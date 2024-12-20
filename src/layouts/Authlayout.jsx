import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Authlayout = () => {
  return (
    <div className="py-5 bg-[#F3F3F3]">
      <div className="w-10/12 mx-auto pb-10">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Authlayout;
