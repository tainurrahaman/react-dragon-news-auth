import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, rating, details, total_view, _id } = news;

  return (
    <div className="w-full mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      {/* Author and Options */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            className="w-full object-cover"
            src={news.image_url}
            alt="Author"
          />
        </div>
        <div>
          <button className="text-gray-400 hover:text-gray-600">
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 leading-snug mb-2">
          {title}
        </h2>
        <p className="text-sm text-gray-500">
          {details.length > 100 ? details.slice(0, 100) + "..." : details}
          <Link
            to={`/news/${_id}`}
            className="text-red-500 cursor-pointer ml-1"
          >
            Read More
          </Link>
        </p>
      </div>

      {/* Footer: Rating and Views */}
      <div className="p-4 border-t border-gray-200 flex justify-between items-center">
        <div className="flex items-center space-x-1">
          {/* Rating Stars */}
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`${
                index < Math.round(rating.number)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
          <span className="text-gray-600 text-sm ml-2">{rating.number}</span>
        </div>

        {/* Total Views */}
        <div className="flex items-center text-gray-600 text-sm">
          <i className="fas fa-eye mr-1"></i>
          {total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
