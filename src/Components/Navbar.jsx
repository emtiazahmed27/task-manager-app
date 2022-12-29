import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import prof from "../assets/images/icons8-client-management-64.png";
import xmark from "../assets/images/icons8-close-48.png";
import ham from "../assets/images/icons8-hamburger-48.png";
import moon from "../assets/images/icons8-moon-48.png";
import sun from "../assets/images/icons8-sun-star-48.png";
import logo from "../assets/images/logo.png";
import { AuthContext } from "../authContext/AuthProvider";
import { logOut } from "../Firebase/firebase";
import CollapsibleNavbar from "./CollapsibleNavbar";

const Navbar = ({ theme, themeChanger }) => {
  const [collapse, setCollapse] = useState(false);

  const collapseHandler = () => {
    setCollapse(!collapse);
  };

  const user = useContext(AuthContext);
  return (
    <div className="w-full h-[10vh] flex justify-between items-center px-6 relative shadow-sm">
      <Link to="/">
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={logo} alt="" className="w-[50px] h-[50px] rounded-full" />
          <h1 className="sm:text-3xl sm:font-bold text-xl font-semibold">
            Task Management App
          </h1>
        </div>
      </Link>
      <div className="flex items-center gap-3">
        {user ? (
          <button
            className="md:inline-block hidden btn btn-sm btn-primary cursor-pointer"
            onClick={logOut}
          >
            Log Out
          </button>
        ) : (
          <button className="md:inline-block hidden btn btn-sm btn-primary cursor-pointer">
            <Link to="/login">Login</Link>
          </button>
        )}
        <img
          src={theme ? sun : moon}
          alt=""
          onClick={themeChanger}
          className="w-[25px] cursor-pointer"
        />
        <img
          src={user ? user?.photoURL : prof}
          alt=""
          className="md:block hidden w-[40px] h-[40px] rounded-full cursor-pointer"
        />
        {collapse ? (
          <img
            src={xmark}
            alt=""
            className="md:hidden w-[30px] h-[30px] rounded-full cursor-pointer"
            onClick={collapseHandler}
          />
        ) : (
          <img
            src={ham}
            alt=""
            className="md:hidden w-[30px] h-[30px] rounded-full cursor-pointer"
            onClick={collapseHandler}
          />
        )}
      </div>
      {collapse && <CollapsibleNavbar />}
    </div>
  );
};

export default Navbar;
