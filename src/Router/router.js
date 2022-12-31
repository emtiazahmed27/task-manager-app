import { createBrowserRouter } from "react-router-dom";
import Banner from "../Components/Banner";
import Main from "../Components/Main";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import TodoApp from "../Pages/TodoApp";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

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
        element: (
          <PrivateRoute>
            <TodoApp></TodoApp>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <Login></Login>
          </PublicRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <PublicRoute>
            <Register></Register>
          </PublicRoute>
        ),
      },
    ],
  },
]);
