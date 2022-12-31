import axios from "../axios/axiosInstances.js";

export const getTodos = async ({ email, tag }) => {
  let query = "";
  if (email) {
    query += `email=${email}`;
  }
  if (tag) {
    query += `&tag=${tag}`;
  }
  const res = await axios.get(`todolist?${query}`);
  return res.data;
};

export const deleteTodos = async (id) => {
  const res = await axios.delete(`todolist/${id}`);
  return res;
};

export const editTodos = async ({ id, data }) => {
  const res = await axios.patch(`todolist/${id}`, data);
  return res.data;
};

export const createTodo = async (data) => {
  const res = await axios.post(`/todolist`, data);
  return res.data;
};
