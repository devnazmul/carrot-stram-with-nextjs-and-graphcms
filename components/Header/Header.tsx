import React from "react";
import Aside from "../Aside/Aside";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <div className="w-full h-screen flex">
      <Aside />
      <Navbar />
    </div>
  );
};

export default Header;
