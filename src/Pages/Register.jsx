import React from "react";
import { useForm } from "react-hook-form";
import google from "../assets/images/icons8-google-48.png";
import login from "../assets/images/icons8-login-65.png";
import {
  registerWithEmailandPassword,
  signInWithGoogle,
} from "../Firebase/firebase";

const Register = () => {
  //social login
  const googleRegisterHandler = () => {
    signInWithGoogle();
  };

  //registration form handler
  const { register, handleSubmit, reset } = useForm();
  const registrationFormHandler = (data) => {
    const obj = {
      name: data.name,
      email: data.email,
      pass: data.pass,
      photoURL: data.photoURL,
    };
    registerWithEmailandPassword(obj.name, obj.email, obj.pass, obj.photoURL);
    reset();
  };

  return (
    <div className="w-full h-[90vh] flex justify-center items-center">
      <div className="lg:w-[25%] sm:w-[60%] w-[90%] flex flex-col justify-center items-center border border-1 border-secondary rounded-sm gap-5 p-3">
        <h1 className="text-xl font-semibold">Register</h1>
        <img src={login} alt="" />
        <form
          className="w-full p-3 flex flex-col justify-center items-center gap-3"
          onSubmit={handleSubmit(registrationFormHandler)}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full block outline-none border-b py-2"
            required
            {...register("name")}
          />
          <input
            type="text"
            placeholder="Your Email Address"
            className="w-full block outline-none border-b py-2"
            {...register("email")}
          />
          <input
            type="text"
            placeholder="Your Password"
            className="w-full block outline-none border-b py-2"
            {...register("pass")}
          />
          <input
            type="text"
            name="photo"
            placeholder="Your Photo URL"
            className="w-full block outline-none border-b py-2"
            {...register("photoURL")}
          />
          <button type="submit" className="btn block btn-sm btn-primary">
            Register
          </button>
        </form>
        <img
          src={google}
          alt=""
          className="block w-[30px] cursor-pointer"
          onClick={googleRegisterHandler}
        />
      </div>
    </div>
  );
};

export default Register;
