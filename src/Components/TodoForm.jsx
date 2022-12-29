import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createTodo } from "../Api/taskApis";
import { AuthContext } from "../authContext/AuthProvider";

const TodoForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const user = useContext(AuthContext);
  const email = user?.email;

  const queryClient = useQueryClient();

  const { mutate: createTask } = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const formSubmitHandler = (data) => {
    const formData = {
      ...data,
      completed: "false",
      email: email,
      createdAt: new Date().toString(),
    };
    reset();
    createTask(formData);
    toast.success("Task created successfully");
  };
  return (
    <form
      className="mt-5 mb-10 shadow-md mx-auto flex flex-col items-center gap-3 py-3 border border-1 border-purple-500 rounded"
      onSubmit={handleSubmit(formSubmitHandler)}
    >
      <h1 className="text-xl font-semibold">Fill the form to add task</h1>
      <input
        type="text"
        placeholder="Add task here"
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
      <button
        type="submit"
        className="text-xl font-semibold block btn btn-sm mx-2"
      >
        Add Task
      </button>
      <ToastContainer></ToastContainer>
    </form>
  );
};

export default TodoForm;
