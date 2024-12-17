import { useLoaderData } from "react-router-dom";

const CategoryNews = () => {
  const { data: news } = useLoaderData();

  console.log(news);

  return (
    <div>
      <h2 className="font-semibold text-[20px]">Dragon News Home</h2>
    </div>
  );
};

export default CategoryNews;
