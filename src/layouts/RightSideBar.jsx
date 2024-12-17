import LoginWithGoogle from "../components/LoginWithGoogle";
import Qzone from "../components/Qzone";

const RightSideBar = () => {
  return (
    <div className="space-y-6 mb-5">
      <LoginWithGoogle></LoginWithGoogle>
      <Qzone></Qzone>
    </div>
  );
};

export default RightSideBar;
