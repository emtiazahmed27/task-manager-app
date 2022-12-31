import React, { useContext } from "react";
import { Link } from "react-router-dom";
import prof from "../assets/images/icons8-client-management-64.png";
import { AuthContext } from "../authContext/AuthProvider";
import { logOut } from "../Firebase/firebase";

const CollapsibleNavbar = () => {
  const user = useContext(AuthContext);
  console.log(user);
  return (
    <div className="w-full h-[30vh] md:hidden absolute top-[10.5vh] left-0 shadow-md p-4 bg-accent flex flex-col justify-center items-center gap-2 z-50">
      {user ? (
        <button className="btn btn-sm btn-primary" onClick={logOut}>
          Log Out
        </button>
      ) : (
        <button className="btn btn-sm btn-neutral cursor-pointer">
          <Link to="/login">Login</Link>
        </button>
      )}
      <img
        src={user ? user.photoURL : prof}
        alt=""
        className="w-[40px] h-[40px] rounded-full border-2 border-purple-500 cursor-pointer"
      />
    </div>
  );
};

export default CollapsibleNavbar;
