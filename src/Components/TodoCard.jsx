import React from "react";
import { useForm } from "react-hook-form";
import circle1 from "../assets/images/icons8-0-percent-30.png";
import circle2 from "../assets/images/icons8-final-state-30.png";
import pencil from "../assets/images/icons8-pencil-64.png";
import rem from "../assets/images/icons8-trash-48.png";

const TodoCard = ({
  task,
  deleteHandler,
  updateTask,
  editable,
  setEditable,
}) => {
  const color = task?.tag;
  const completedInfo = {
    truthy: { completed: "true" },
    falsy: { completed: "false" },
  };

  const completeHandler = () => {
    updateTask({
      id: task._id,
      data:
        task.completed === "true" ? completedInfo.falsy : completedInfo.truthy,
    });
  };

  //Edit functionalities
  const { register, handleSubmit, reset } = useForm();

  const editFormSubmitHandler = (data) => {
    const formData = {
      ...data,
      completed: "false",
      createdAt: new Date().toString(),
      email: task.email,
    };

    updateTask({
      id: editable,
      data: formData,
    });

    reset();
  };

  return (
    <div className="w-full shadow-sm border border-1 mt-1 rounded border-purple-400 mx-auto flex justify-between items-center px-3 py-3">
      <div className="w-[80%] flex justify-start items-center gap-3">
        <div className="w-[5%]">
          <img
            src={task.completed === "true" ? circle2 : circle1}
            alt=""
            className="w-[30px] cursor-pointer"
            onClick={completeHandler}
          />
        </div>
        <div className="flex flex-col gap-1">
          <p
            className={
              task.completed === "true" ? "w-[95%] line-through" : "w[95%]"
            }
          >
            {task.title}
          </p>
          <p>Date: {task.createdAt.substr(0, 15)}</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        <div
          className={`w-[20px] h-[20px] rounded-full bg-${color.toLowerCase()}-500 cursor-pointer`}
        ></div>
        <label>
          <img
            src={rem}
            alt=""
            className="w-[30px] cursor-pointer"
            onClick={() => deleteHandler(task._id)}
          />
        </label>
        <label htmlFor="my-modal-6">
          <img
            src={pencil}
            alt=""
            className="w-[30px]  cursor-pointer"
            onClick={() => setEditable(task._id)}
          />
        </label>
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <form
              className="flex flex-col justify-center items-center gap-3"
              onSubmit={handleSubmit(editFormSubmitHandler)}
            >
              <input
                type="text"
                placeholder="Add Task Title"
                className="w-[90%] outline-none block py-2 border-b-2"
                {...register("title", { required: true })}
              />
              <label htmlFor="importance">Select Importance</label>
              <select
                className="outline-none cursor-pointer"
                name="importance"
                id="importance"
                {...register("tag", { required: true })}
              >
                <option value="Green">Green</option>
                <option value="Orange">Orange</option>
                <option value="Red">Red</option>
              </select>
              <button className="btn btn-sm" type="submit">
                submit
              </button>
            </form>
            <div className="modal-action">
              <label htmlFor="my-modal-6" className="btn btn-sm">
                close
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
