import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftsideBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((result) => result.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  return (
    <div>
      <h2 className="font-semibold text-[20px] mb-5">AllCategory</h2>
      {categories.map((category) => (
        <NavLink
          to={`/category/${category.category_id}`}
          key={category.category_id}
          className="btn w-full mb-2 text-[#9F9F9F]"
        >
          {category.category_name}
        </NavLink>
      ))}
    </div>
  );
};

export default LeftsideBar;
