import React from "react";
import monkey from "../assets/images/icons8-speak-no-evil-monkey-48.png";

const NoTasks = () => {
  return (
    <div className="w-full shadow-sm border border-1 mt-1 rounded border-purple-400 mx-auto flex justify-center items-center px-3 py-3 cursor-pointer">
      <img src={monkey} alt="" className="w-[40px]" />
      <p className="p-[5px]">No Tasks Were Found</p>
      <img src={monkey} alt="" className="w-[40px]" />
    </div>
  );
};

export default NoTasks;
