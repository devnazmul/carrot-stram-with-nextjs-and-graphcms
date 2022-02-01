import Image from "next/image";
import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IoNotificationsSharp } from "react-icons/io5";
import { MdCloudUpload } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-primary z-10 flex justify-between fixed pl-72 ">
      <div className="w-1/2 px-10 py-5">
        <div className="w-3/4 h-12 bg-secondery overflow-hidden relative rounded-full">
          <input
            type="text"
            id="searchBar"
            className=" px-5 py-5 h-full w-full bg-secondery rounded-full active:border-none outline-none text-orange"
            placeholder="Search...."
          />
          <label htmlFor="searchBar" className="cursor-pointer">
            <BiSearchAlt className="text-2xl absolute top-1/2 text-orange -translate-y-1/2 right-3" />
          </label>
        </div>
      </div>
      <div className="w-1/3 py-5">
        <div className="w-3/4 h-12 relative rounded-full flex justify-between">
          <div className="flex justify-between text-sm items-center bg-secondery py-3 h-full rounded-full px-4 text-orange">
            <MdCloudUpload className="text-xl text-orange mr-2" />
            Upload Video
          </div>
          <div className="flex justify-between items-center">
            <div className="relative mr-2">
              <span className="absolute w-3 h-3 -top-0.5 -right-0.5 rounded-full border border-primary bg-orange"></span>
              <IoNotificationsSharp className="text-xl" />
            </div>
            <div className="cursor-pointer h-12 w-12 border-dotted rounded-full mx-4 overflow-hidden border-2 p-1 border-orange">
              <Image
                src="/src/img/avater.png"
                height="40px"
                width="40px"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
