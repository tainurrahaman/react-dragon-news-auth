import moment from "moment";
import { useEffect, useState } from "react";
import { CiCalendar } from "react-icons/ci";

const HighlightedNews = () => {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/category/05")
      .then((res) => res.json())
      .then((data) => setSports(data.data));
  }, []);

  return (
    <div className="mt-10">
      {sports.map((sport) => (
        <div className="mb-4 space-y-5" key={sport._id}>
          <img
            className="rounded-[5px]"
            src={sport.image_url}
            alt="Sports Image"
          />
          <h2 className="font-semibold text-[20px]">{sport.title}</h2>
          <div className="flex items-center justify-between font-medium text-[16px]">
            <p>Sports</p>
            <div className="flex items-center gap-2 font-medium text-[16px]">
              <CiCalendar></CiCalendar>
              <p className=" text-gray-500">{moment().format("MMM Do YYYY")}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HighlightedNews;
