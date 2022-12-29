import { createBrowserRouter } from "react-router-dom";
import Banner from "../Components/Banner";
import Main from "../Components/Main";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import TodoApp from "../Pages/TodoApp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Banner />,
      },
      {
        path: "/todoapp",
        element: <TodoApp></TodoApp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
