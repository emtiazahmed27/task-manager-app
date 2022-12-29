import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import google from "../assets/images/icons8-google-48.png";
import login from "../assets/images/icons8-login-65.png";
import { AuthContext } from "../authContext/AuthProvider";
import {
  loginWithEmailandPassword,
  signInWithGoogle,
} from "../Firebase/firebase";

const Login = () => {
  const user = useContext(AuthContext);
  const [error, setError] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  //login form submit handler
  const loginWithEmailsubmitHandler = (data) => {
    const email = data.email;
    const pass = data.pass;
    console.log(email, pass);
    loginWithEmailandPassword(email, pass, setError);
    reset();
  };
  error && toast.error(error);

  const googleRegisterHandler = () => {
    signInWithGoogle();
  };
  return (
    <div className="w-full h-[90vh] flex justify-center items-center">
      <ToastContainer></ToastContainer>
      <div className="lg:w-[25%] sm:w-[60%] w-[90%] flex flex-col justify-center items-center border border-1 border-secondary rounded-sm gap-5 p-3">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl font-semibold">LOG IN</h1>
          <img src={login} alt="" />
        </div>
        <form
          className="w-full flex flex-col justify-center items-center gap-4 mt-3"
          onSubmit={handleSubmit(loginWithEmailsubmitHandler)}
        >
          <input
            type="text"
            placeholder="User Email"
            className="block w-full outline-none border-b py-2"
            required
            {...register("email")}
          />
          <input
            type="text"
            placeholder="Password"
            className="block w-full outline-none border-b py-2"
            required
            {...register("pass")}
          />
          <button type="submit" className="btn btn-sm btn-primary block">
            Login
          </button>
        </form>
        <img
          src={google}
          alt=""
          className="block w-[30px] cursor-pointer"
          onClick={googleRegisterHandler}
        />
        <Link to="/register">
          <p className="underline text-blue-500">Register Now?</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
