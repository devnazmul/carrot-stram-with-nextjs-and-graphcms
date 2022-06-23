import Link from "next/link";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IoNotificationsSharp } from "react-icons/io5";
import { MdCloudUpload } from "react-icons/md";
import Avater from "../../Avater/Avater";
const Navbar = () => {
  const [user, setUser] = useState(false);
  return (
    <nav className="w-full h-28 navBarBg z-10 flex pb-5 justify-between fixed pr-5 lg:pr-0 pl-20 sm:pl-32 md:pl-48  lg:pl-72 ml-7">
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
      <div className="lg:w-1/3 w-1/5 py-5 mr-16">
        <div className="w-full h-12 relative rounded-full flex justify-end">
          <div className="flex justify-center items-center">
            {!user ? (
              <>
                <Link href={"/logIn"}>
                  <div className="w-28 cursor-pointer hidden mr-5 lg:flex  justify-center text-sm items-center bg-hr py-3 h-full rounded-full px-5 text-orange font-bold">
                    Log in
                  </div>
                </Link>
                <Link href={"/signUp"}>
                  <div className="w-28 cursor-pointer hidden lg:flex  justify-center text-sm items-center bg-orange py-3 h-full rounded-full px-4 text-hr font-bold">
                    Sign In
                  </div>
                </Link>
              </>
            ) : (
              <>
                <Link href={"/uploadVideo"}>
                  <div className="cursor-pointer mr-5 hidden lg:flex  justify-between text-sm items-center bg-hr py-3 h-full rounded-full px-4 text-orange">
                    <MdCloudUpload className="text-xl text-orange mr-2" />
                    Upload Video
                  </div>
                </Link>
                <div className="cursor-pointer relative mr-5">
                  <span className="absolute w-3 h-3 -top-0.5 -right-0.5 rounded-full border border-hr bg-orange"></span>
                  <IoNotificationsSharp className="text-xl text-hr" />
                </div>
                <Avater name="Retro gaming" src="/src/img/avater.png" />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
