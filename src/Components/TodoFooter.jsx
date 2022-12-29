import React from "react";

const TodoFooter = ({ tag, setTag, allTaskButtonHandler }) => {
  return (
    <div className="mt-2 border border-purple-400 flex justify-between items-center p-3 rounded-sm">
      <p>sort by Importance</p>
      <div className="flex justify-center items-center gap-2">
        <p
          className="text-blue-500 font-semibold underline cursor-pointer"
          onClick={allTaskButtonHandler}
        >
          All Tasks
        </p>
        <div
          className="w-[20px] h-[20px] rounded-full bg-green-500 cursor-pointer"
          onClick={() => setTag("Green")}
        ></div>
        <div
          className="w-[20px] h-[20px] rounded-full bg-orange-500 cursor-pointer"
          onClick={() => setTag("Orange")}
        ></div>
        <div
          className="w-[20px] h-[20px] rounded-full bg-red-500 cursor-pointer"
          onClick={() => setTag("Red")}
        ></div>
      </div>
    </div>
  );
};

export default TodoFooter;
