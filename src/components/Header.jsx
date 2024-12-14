import dragonImg from "../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center mb-7">
      <div className="flex justify-center mb-5">
        <img
          className="max-w-[400px]"
          src={dragonImg}
          alt="Project Img title"
        />
      </div>
      <h3 className="text-[#706F6F] font-normal text-[18px] mb-2">
        Journalism Without Fear or Favour
      </h3>
      <p className="font-medium text-[20px] text-gray-500">
        {moment().format("dddd, MMMM Do YYYY")}
      </p>
    </div>
  );
};

export default Header;
