import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IoNotificationsSharp } from "react-icons/io5";
import { MdCloudUpload } from "react-icons/md";
import Avater from "../../Avater/Avater";
const Navbar = () => {
  return (
    <nav className="w-full h-28 navBarBg z-10 flex pb-5 justify-between fixed pr-5 lg:pr-0 pl-20 sm:pl-32 md:pl-48  lg:pl-72 ">
      <div className="lg:w-1/2 w-full pl-10 lg:pl-0 lg:px-10 py-5">
        <div className="lg:w-3/4 w-4/5 m h-12 bg-secondery overflow-hidden relative rounded-full">
          <input
            type="text"
            id="searchBar"
            className=" px-5 py-5 h-full w-full bg-hr rounded-full active:border-none outline-none text-orange"
            placeholder="Search...."
          />
          <label htmlFor="searchBar" className="cursor-pointer">
            <BiSearchAlt className="text-2xl absolute top-1/2 text-orange -translate-y-1/2 right-3" />
          </label>
        </div>
      </div>

      <div className="lg:w-1/3 w-1/5 py-5">
        <div className="w-3/4 h-12 relative rounded-full flex justify-between">
          <div className="cursor-pointer hidden lg:flex  justify-between text-sm items-center bg-hr py-3 h-full rounded-full px-4 text-orange">
            <MdCloudUpload className="text-xl text-orange mr-2" />
            Upload Video
          </div>
          <div className="flex justify-between items-center">
            <div className="cursor-pointer relative mr-2">
              <span className="absolute w-3 h-3 -top-0.5 -right-0.5 rounded-full border border-primary bg-orange"></span>
              <IoNotificationsSharp className="text-xl" />
            </div>
            <Avater name="Retro gaming" src="/src/img/avater.png" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
