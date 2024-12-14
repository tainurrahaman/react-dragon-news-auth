import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex gap-2 bg-[#F3F3F3] rounded-sm">
      <button className="p-3  bg-[#D72050] text-white font-medium text-[20px]">
        Latest
      </button>
      <Marquee pauseOnHover className="gap-5 font-semibold text-[16px]">
        <p>Match Highlights: Germany vs Spain — as it happened !</p>
        <p>Match Highlights: Germany vs Spain — as it happened !</p>
        <p>Match Highlights: Germany vs Spain — as it happened !</p>
        <p>Match Highlights: Germany vs Spain — as it happened !</p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
