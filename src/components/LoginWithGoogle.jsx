import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import auth from "../firebase/firebase.config";

const LoginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [error, setError] = useState();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };
  return (
    <div className="font-semibold flex flex-col justify-center mb-5">
      <h2 className="text-[20px] mb-5"> Login With</h2>
      <div className="space-y-5 flex flex-col">
        <button
          onClick={handleGoogleSignIn}
          className=" flex justify-center items-center border border-green-400 p-3 rounded-md text-green-400 gap-2"
        >
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
