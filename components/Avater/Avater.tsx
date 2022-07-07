import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

interface Props {
  user: User;
}
interface User {
  fullName: string;
  avatar: Avatar;
}
interface Avatar {
  url: string;
}
const Avater = ({ user }: Props) => {
  const [option, setOption] = useState(false);
  const route = useRouter();
  const logoutHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    localStorage.clear();

    route.asPath === "/" ? route.reload() : route.push("/");
  };

  return (
    <>
      <button
        className="relative"
        onClick={() => {
          setOption(option ? false : true);
        }}
      >
        <div
          className={`mx-2 cursor-pointer h-12 w-12 lg:h-12 lg:w-12  overflow-hidden border-dotted border-2 p-0.5 border-orange rounded-full `}
        >
          {user?.avatar?.url && (
            <Image
              alt={user.fullName}
              loading={"lazy"}
              title={user.fullName}
              src={user.avatar.url}
              height="45px"
              width="45px"
              className="border-dotted border-orange border-2 rounded-full"
            />
          )}
        </div>
      </button>
      <div className="flex justify-center items-center text-center">
        {option && (
          <div
            className={`transition-all duration-300 absolute ${
              option ? "top-0" : "-top-96"
            }  right-0 mt-14 py-5 shadow-lg bg-hovColor rounded-xl h-auto w-40`}
          >
            <ul>
              <li
                onClick={() => {}}
                className="hover:bg-orange hover:text-hr cursor-pointer  py-5 text-orange font-bold"
              >
                Profile
              </li>
              <li
                onClick={() => {
                  logoutHandler();
                }}
                className="hover:bg-orange hover:text-hr cursor-pointer py-5 text-orange font-bold"
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
export default Avater;
