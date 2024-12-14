import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomelayOut = () => {
  return (
    <div className="w-10/12 mx-auto my-5">
      <header>
        <Header></Header>
        <LatestNews></LatestNews>
        <Navbar></Navbar>
      </header>
    </div>
  );
};

export default HomelayOut;
