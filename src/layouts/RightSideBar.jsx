import LoginWithGoogle from "../components/LoginWithGoogle";
import Qzone from "../components/Qzone";
import SocialLogin from "../components/SocialLogin";

const RightSideBar = () => {
  return (
    <div className="space-y-6 mb-5">
      <LoginWithGoogle></LoginWithGoogle>
      <SocialLogin></SocialLogin>
      <Qzone></Qzone>
    </div>
  );
};

export default RightSideBar;
