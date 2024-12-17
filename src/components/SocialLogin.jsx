import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="font-semibold">
      <h2 className="text-[20px] mb-5">Find Us on</h2>
      <div className="join join-vertical flex ">
        <button className="btn join-item justify-start text-blue-400">
          <FaFacebook></FaFacebook> <span>Facebook</span>
        </button>
        <button className="btn join-item justify-start text-orange-700">
          <FaInstagram></FaInstagram>
          <span>Instragram</span>
        </button>
        <button className="btn join-item justify-start">
          <FaTwitter></FaTwitter> <span>Twitter</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
