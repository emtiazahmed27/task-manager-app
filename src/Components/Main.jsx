import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Main = () => {
  const [theme, setTheme] = useState(false);

  const themeChanger = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="w-full min-h-[100vh] text-secondary"
      data-theme={theme ? "dracula" : "corporate"}
    >
      <Navbar theme={theme} themeChanger={themeChanger} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
