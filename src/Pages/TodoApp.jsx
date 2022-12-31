import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteTodos, editTodos, getTodos } from "../Api/taskApis";
import { AuthContext } from "../authContext/AuthProvider";
import Loader from "../Components/Loader";
import NoTasks from "../Components/NoTasks";
import TodoCard from "../Components/TodoCard";
import TodoFooter from "../Components/TodoFooter";
import TodoForm from "../Components/TodoForm";

const TodoApp = () => {
  const [todayDate, setTodayDate] = useState("");
  const user = useContext(AuthContext);
  const email = user?.email;

  const queryClient = useQueryClient();
  const [tag, setTag] = useState("");

  const obj = { email: email, tag: tag };

  useEffect(() => {
    const today = new Date();
    setTodayDate(today.toLocaleString().split(",")[0]);
    console.log(obj.tag, obj.email);
    refetch(obj.tag, obj.email);
  }, [obj.email, obj.tag]);

  const {
    data: tasks,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["todos", obj.email, obj.tag],
    queryFn: () => getTodos(obj),
  });

  const allTaskButtonHandler = () => {
    setTag("");
    refetch(obj.email, obj.tag);
  };

  //delete mutation
  const { mutate: del } = useMutation({
    mutationFn: deleteTodos,
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({
        queryKey: ["todos", obj.email, obj.tag],
      });
      const previousTodos = queryClient.getQueryData([
        "todos",
        obj.email,
        obj.tag,
      ]);
      queryClient.setQueryData(["todos", obj.email, obj.tag], (old) => {
        const filtered = old.filter((todo) => todo._id !== newTodo);
        return filtered;
      });
      return previousTodos;
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(
        ["todos", obj.email, obj.tag],
        context.previousTodos
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos", obj.email, obj.tag],
      });
      toast.success("Task deleted successfully");
    },
  });

  const deleteHandler = (id) => {
    del(id);
  };

  //edit mutation
  const [editable, setEditable] = useState(null);

  const { mutate: updateTask } = useMutation({
    mutationFn: editTodos,
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({
        queryKey: ["todos", obj.email, obj.tag],
      });
      const previousTodos = queryClient.getQueryData([
        "todos",
        obj.email,
        obj.tag,
      ]);
      queryClient.setQueryData(["todos", obj.email, obj.tag], (old) => {
        const updated = old.map((todo) => {
          if (todo._id === newTodo.id) {
            return {
              ...todo,
              ...newTodo.data,
            };
          }
          return todo;
        });
        return updated;
      });
      return previousTodos;
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(
        ["todos", obj.email, obj.tag],
        context.previousTodos
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos", obj.email, obj.tag],
      });
    },
  });
  console.log(tasks);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full min-h-[100vh] flex justify-center items-center text-secondary p-4">
          <div className="lg:w-[50%] sm:w-[80%] w-full min-h-[100vh]">
            <div className="w-full h-[8vh] shadow-md flex justify-between items-center px-6">
              <h1 className="sm:text-xl text-md font-semi-bold">
                Task Management App
              </h1>
              <p className="sm:text-md text-sm">Today:{todayDate}</p>
            </div>
            <TodoForm />
            {tasks.length === 0 && <NoTasks />}
            {tasks?.map((task, index) => (
              <TodoCard
                task={task}
                key={index}
                deleteHandler={deleteHandler}
                updateTask={updateTask}
                editable={editable}
                setEditable={setEditable}
              />
            ))}
            <TodoFooter
              tag={tag}
              setTag={setTag}
              allTaskButtonHandler={allTaskButtonHandler}
            />
            <ToastContainer />
          </div>
        </div>
      )}
    </>
  );
};

export default TodoApp;
