import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();

  console.log(news);

  return (
    <div>
      <h2 className="font-semibold text-[20px] mb-5">Dragon News Home</h2>

      <div className="space-y-5">
        {news.map((singleNews) => (
          <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
