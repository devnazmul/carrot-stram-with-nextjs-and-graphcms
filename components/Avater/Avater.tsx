import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { TbDashboard } from "react-icons/tb";
import { getUserChannel } from "../../services";

interface Props {
  user: User;
}
interface User {
  fullName: string;
  avatar: Avatar;
  email: string;
}
interface Avatar {
  url: string;
}
interface Channel {
  slug: string;
  channelName: string;
  channelLogo: ChannelLogo;
}
interface ChannelLogo {
  url: string;
}

const Avater = ({ user }: Props) => {
  const router = useRouter();

  const [option, setOption] = useState(false);
  const [channels, setChannels] = useState<Array<Channel> | null>();
  const route = useRouter();
  const logoutHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    localStorage.clear();
    route.asPath === "/" ? route.reload() : route.push("/");
  };

  useEffect(() => {
    getUserChannel(user?.email).then((res) => {
      if (res.channels) {
        setChannels(res.channels);
      }
    });
  }, [channels]);

  return (
    <>
      <button
        className="relative"
        onClick={() => {
          setOption(option ? false : true);
        }}
      >
        <div
          className={`mx-2 cursor-pointer h-12 w-12 lg:h-12 lg:w-12  overflow-hidden border-dotted border-2 p-0.5 border-orange rounded-full`}
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
            }  right-0 mt-14 overflow-hidden shadow-lg bg-hovColor rounded-xl w-72`}
          >
            <ul className="flex flex-col justify-start ">
              <Link href={"/dashboard"}>
                <li className="hover:bg-orange  bg-opacity-5 hover:text-hr cursor-pointer  py-5 text-orange font-bold text-left px-5">
                  <span className="flex justify-start items-center">
                    <TbDashboard className="mr-2 text-xl" />
                    Dashboard
                  </span>
                </li>
              </Link>
              <li className=" pt-5 text-orange font-bold text-left px-5">
                <hr className="border-primary mb-2" />
                <span className="flex justify-start items-center mb-2 ">
                  Channels
                </span>
                <ul className=" h-72 pr-5 overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-900 hover:scrollbar-thumb-orange transition-all duration-500 scrollbar-track-secondery scrollbar-thumb-rounded-full scrollbar-track-rounded-full ">
                  <Link href={"/createChannel"}>
                    <li className="hover:bg-orange rounded-xl hover:text-hr cursor-pointer  py-5 text-orange font-bold text-left px-5">
                      <span className="flex justify-start items-center">
                        <HiOutlinePlusCircle className="mr-2 text-xl" />
                        Create Channel
                      </span>
                    </li>
                  </Link>
                  {channels &&
                    channels.map((channel) => {
                      return (
                        <Link href={`/channel/${channel.slug}`}>
                          <li
                            key={channel.slug}
                            className="hover:bg-orange rounded-xl hover:text-hr cursor-pointer  py-5 text-orange font-bold text-left px-5"
                          >
                            <span className="flex justify-start items-center">
                              <Image
                                src={
                                  channel.channelLogo?.url
                                    ? channel.channelLogo?.url
                                    : "/src/img/no-image.png"
                                }
                                width={20}
                                height={20}
                                className="mr-2 rounded-full text-xl"
                              />
                              <span className="ml-2">
                                {channel.channelName}
                              </span>
                            </span>
                          </li>
                        </Link>
                      );
                    })}
                </ul>
                <hr className="border-primary mb-2" />
              </li>
              <li
                onClick={() => {
                  logoutHandler();
                }}
                className="hover:bg-orange hover:text-hr cursor-pointer py-5 text-orange font-bold text-left px-5"
              >
                <span className="flex justify-start items-center">
                  <BiLogOutCircle className="mr-2 text-xl" />
                  Logout
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
export default Avater;
