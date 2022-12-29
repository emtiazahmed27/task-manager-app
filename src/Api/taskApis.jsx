import axios from "../axios/axiosInstances.js";

export const getTodos = async ({ email, tag }) => {
  let query = "";
  if (email) {
    query += `email=${email}`;
  }
  if (tag) {
    query += `&tag=${tag}`;
  }
  const res = await axios.get(
    `https://taskmanagerapp-pi.vercel.app/todolist?${query}`
  );
  return res.data;
};

export const deleteTodos = async (id) => {
  console.log(id);
  const res = await axios.delete(
    `https://taskmanagerapp-pi.vercel.app/todolist/${id}`
  );
  return res;
};

export const editTodos = async ({ id, data }) => {
  console.log(id);
  const res = await axios.patch(
    `https://taskmanagerapp-pi.vercel.app/todolist/${id}`,
    data
  );
  return res.data;
};

export const createTodo = async (data) => {
  const res = await axios.post(
    `https://taskmanagerapp-pi.vercel.app/todolist`,
    data
  );
  return res.data;
};
