import { FaGithub, FaGoogle } from "react-icons/fa";

const LoginWithGoogle = () => {
  return (
    <div className="font-semibold flex flex-col justify-center mb-5">
      <h2 className="text-[20px] mb-5"> Login With</h2>
      <div className="space-y-5 flex flex-col">
        <button className=" flex justify-center items-center border border-green-400 p-3 rounded-md text-green-400 gap-2">
          <FaGoogle></FaGoogle>
          <span> Login With Google</span>
        </button>
        <button className=" flex justify-center items-center border border-gray-500 rounded-md p-3 gap-2">
          <FaGithub></FaGithub>
          <span> Login With Github</span>
        </button>
      </div>
    </div>
  );
};

export default LoginWithGoogle;
