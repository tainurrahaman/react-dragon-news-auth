import { Link } from "react-router-dom";
import userImg from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex justify-between mt-5 items-center">
      <div>{user && user.email}</div>
      <div className="font-normal text-[18px] text-[#706F6F] flex gap-3 text-center">
        <Link to="/">Home</Link>
        <Link>About</Link>
        <Link>Career</Link>
      </div>
      <div className="flex justify-center items-center gap-2">
        <img src={userImg} alt="" />
        <Link
          to="/auth/login"
          className="bg-[#403F3F] text-white px-5 py-2 font-semibold text-[20px]"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
