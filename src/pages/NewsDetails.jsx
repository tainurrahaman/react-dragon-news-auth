import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightSideBar from "../layouts/RightSideBar";
import { FaRegStar } from "react-icons/fa";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log(news);

  return (
    <div>
      <header className="my-12">
        <Header></Header>
      </header>
      <main className="w-10/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="font-semibold text-[20px] pb-5">Dragon News</h2>
          <div className="card bg-base-100 shadow-lg rounded-lg border border-gray-200">
            <figure>
              <img
                src={news.image_url}
                alt={news.title}
                className="w-full object-cover rounded-t-lg"
              />
            </figure>
            <div className="card-body p-6">
              <div className="flex items-center justify-between">
                <h2 className="card-title text-xl font-bold">{news.title}</h2>
                <span className="flex items-center space-x-1 text-yellow-500">
                  <FaRegStar /> <span>{news.rating.number}</span>
                </span>
              </div>
              <p className="text-gray-600 text-[16px] font-normal mb-4">
                {news.details}...
              </p>
              <div className="card-actions justify-between items-center">
                <div className="flex items-center space-x-2">
                  <img
                    src={news.author.img}
                    alt={news.author.name}
                    className="w-10 h-10 rounded-full border border-gray-300"
                  />
                  <div>
                    <p className="text-sm font-semibold">{news.author.name}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(
                        news.author.published_date
                      ).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <Link
                  to={`/category/${news.category_id}`}
                  className="btn bg-[#D72050] text-white btn-neutral btn-sm"
                >
                  All News in this category
                </Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightSideBar></RightSideBar>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
