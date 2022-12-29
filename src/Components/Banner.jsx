import React from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import focused from "../assets/images/59893.png";
import todoImg from "../assets/images/Checklist.png";
import question from "../assets/images/question.png";

const Banner = () => {
  return (
    <div className="w-full min-h-[90vh]">
      <div
        className="w-full min-h-[30vh] md:flex items-center py-3 shadow-sm mt-3"
        data-aos="fade-left"
      >
        <div className="sm:w-[30%] w-[95%] mx-auto">
          <img src={todoImg} alt="" className="w-[400px] mx-auto rounded-sm" />
        </div>
        <div className="sm:w-[30%] w-[95%] mx-auto sm:text-left text-center mt-3">
          <h1 className="font-semibold text-xl">A smart daily planner</h1>
          <p className="mt-4">
            Set yourself up for success with My Day, intelligent and
            personalized suggestions to update your daily or weekly to do list.
            With both a Microsoft to do desktop app and mobile app available, it
            is easy to stay on task all day long.
          </p>
          <button className="btn btn-sm btn-primary mt-3">
            <Link to="/todoapp">Get Started</Link>
          </button>
        </div>
      </div>
      <div
        className="w-full min-h-[30vh] md:flex items-center py-3 shadow-sm mt-3"
        data-aos="fade-right"
      >
        <div className="sm:w-[30%] w-[95%] sm:text-left text-center mx-auto">
          <h1 className="font-semibold text-xl">
            Why a Task Management is necessary?
          </h1>
          <p className="mt-4">
            An organized lists of tasks make things more manageable and keeps
            you mentally focused on the tasks at hand.
          </p>
        </div>
        <div className="sm:w-[30%] w-[95%] mx-auto">
          <img src={focused} alt="" className="w-[400px] rounded-sm mx-auto" />
        </div>
      </div>
      <div
        className="w-full min-h-[30vh] md:flex items-center py-3 shadow-sm mt-3"
        data-aos="fade-left"
      >
        <div className="sm:w-[30%] w-[95%] mx-auto">
          <img src={question} alt="" className="w-[400px] mx-auto rounded-sm" />
        </div>
        <div className="sm:w-[30%] w-[95%] mx-auto">
          <h1 className="font-semibold text-xl">
            When you should make a Task?
          </h1>
          <p className="mt-4">
            The best time to make a daily to do list is either the night before,
            or first thing in the morning. The biggest benefit of a well
            organized to do list is the peace of mind that comes with having a
            plan in place. Going to bed with a plan for the next day in place
            can lead to better sleep. Making a list first thing in the morning
            will give you a plan for a successful day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
