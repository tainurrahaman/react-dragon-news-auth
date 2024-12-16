import { FaGithub, FaGoogle } from "react-icons/fa";

const LoginWithGoogle = () => {
  return (
    <div className="font-semibold flex flex-col justify-center mb-5">
      <h2 className="text-[20px] mb-5"> Login With</h2>
      <div className="space-y-2 flex flex-col">
        <button className="btn flex justify-center items-center text-green-400 gap-2">
          <FaGoogle></FaGoogle>
          <span> Login With Google</span>
        </button>
        <button className="btn flex justify-center items-center  gap-2">
          <FaGithub></FaGithub>
          <span> Login With Github</span>
        </button>
      </div>
    </div>
  );
};

export default LoginWithGoogle;
