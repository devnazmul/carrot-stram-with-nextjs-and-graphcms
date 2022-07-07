import Link from "next/link";
import { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FiLogIn } from "react-icons/fi";
import { IoNotificationsSharp } from "react-icons/io5";
import { MdCloudUpload } from "react-icons/md";
import Avater from "../../Avater/Avater";

const Navbar = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("UserData") || "false"));
  }, []);
  return (
    <nav className="w-full h-28 navBarBg z-10 flex pb-5 justify-between fixed pr-0 pl-10 sm:pl-14 md:pl-28 lg:pl-48 ml-7">
      <div className="lg:w-1/2 w-full pl-10 lg:pl-10 lg:px-10 py-5">
        <div className="lg:w-3/4 w-4/5 m h-12 bg-secondery overflow-hidden relative rounded-full">
          <input
            type="text"
            id="searchBar"
            className="px-5 py-5 h-full w-full bg-hovColor rounded-full active:border-none outline-none text-orange"
            placeholder="Search...."
          />
          <label htmlFor="searchBar" className="cursor-pointer">
            <BiSearchAlt className="text-2xl absolute top-1/2 text-orange -translate-y-1/2 right-3" />
          </label>
        </div>
      </div>
      <div className="lg:w-1/3 w-1/5 py-5 mr-10 md:mr-16">
        <div className="w-full h-12 relative rounded-full flex justify-end">
          <div className="flex justify-center items-center">
            {!user ? (
              <>
                <Link href={"/logIn"}>
                  <FiLogIn
                    title="log in"
                    className="text-hovColor cursor-pointer bg-orange mx-1 rounded-full p-3 w-11 h-11 text-3xl md:hidden"
                  />
                </Link>
                <Link href={"/logIn"}>
                  <div className="w-16 md:w-24 mr-5 hover:shadow-xl cursor-pointer hidden md:flex justify-center text-sm items-center bg-hovColor py-3 h-full rounded-full px-1 md:px-5 text-orange font-bold">
                    Log in
                  </div>
                </Link>
                <Link href={"/signUp"}>
                  <div className="w-16 md:w-24 hover:shadow-xl cursor-pointer hidden md:flex justify-center text-sm items-center bg-orange py-3 h-full rounded-full px-1 md:px-4 text-hovColor font-bold">
                    Sign In
                  </div>
                </Link>
              </>
            ) : (
              <>
                <Link href={"/uploadVideo"}>
                  <div
                    title="Upload Video"
                    className="cursor-pointer hover:scale-105 transition-all duration-150 hover:shadow-md mr-3 lg:mr-5 flex  justify-between text-sm items-center lg:bg-hovColor lg:py-3 lg:h-full rounded-full lg:px-4 text-orange"
                  >
                    <MdCloudUpload className="text-2xl lg:text-xl text-orange md:mr-2 " />
                    <span className="hidden lg:block">Upload Video</span>
                  </div>
                </Link>
                <div
                  title="notification"
                  className="cursor-pointer  hover:scale-105 transition-all duration-150 hover:shadow-md relative mr-3 md:mr-5"
                >
                  <span className="absolute w-3 h-3 -top-1 -right-1 rounded-full border border-hr bg-orange"></span>
                  <IoNotificationsSharp className="text-2xl lg:text-xl text-hr" />
                </div>
                {user && <Avater user={user} />}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
