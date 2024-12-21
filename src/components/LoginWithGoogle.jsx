import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import auth from "../firebase/firebase.config";

const LoginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
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

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
        console.error("GitHub Sign-In Error:", err.message);
      });
  };

  return (
    <div className="font-semibold flex flex-col justify-center mb-5">
      <h2 className="text-[20px] mb-5"> Login With</h2>
      <div className="space-y-5 flex flex-col">
        <div>
          <button
            onClick={handleGoogleSignIn}
            className=" flex justify-center items-center border border-green-400 p-3 rounded-md text-green-400 gap-2"
          >
            <FaGoogle></FaGoogle>
            <span> Login With Google</span>
          </button>
        </div>
        <div>
          <button
            onClick={handleGithubSignIn}
            className=" flex justify-center items-center border border-gray-500 rounded-md p-3 gap-2"
          >
            <FaGithub></FaGithub>
            <span> Login With Github</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginWithGoogle;
