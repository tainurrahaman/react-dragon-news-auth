import swimming from "../assets/swimming.png";
import classimg from "../assets/class.png";
import playground from "../assets/playground.png";
import bg from "../assets/bg.png";

const Qzone = () => {
  return (
    <div className="bg-[#F3F3F3] p-1 space-y-5 rounded-sm ">
      <h2 className="pt-3 pl-3 font-semibold text-[20px]">Q-Zone</h2>
      <img src={swimming} alt="swimming" />
      <img src={classimg} alt="classimg" />
      <img src={playground} alt="playground" />
      <img src={bg} alt="advertise" />
    </div>
  );
};

export default Qzone;
