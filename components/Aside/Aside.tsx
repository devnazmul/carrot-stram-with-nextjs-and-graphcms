import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiTwotoneLike } from "react-icons/ai";
import { BiHistory } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { MdExplore, MdSubscriptions, MdWatchLater } from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";
import { getUserSubscriptions } from "../../services/index";
import LoadingComponent from "../Loading/LoadingComponent";
import Logo from "./Logo/Logo";
import NavLink from "./NavLink/NavLink";

interface Channel {
  slug: string;
  channelName: string;
  channelLogo: ChannelLogo;
}
interface ChannelLogo {
  url: string;
}

export default function Aside() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any | null>();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("UserData") || "false"));
  }, []);
  useEffect(() => {
    user &&
      getUserSubscriptions(user.slug).then((data) => {
        setSubscriptions(data);
        setIsLoading(false);
      });
  }, [user]);

  return (
    <div className="flex flex-col w-1/6 bg-secondery z-20 fixed rounded-r-3xl py-5 h-full">
      <Logo />
      <div className="scrollbar-thin scrollbar-thumb-yellow-900 hover:scrollbar-thumb-orange transition-all duration-500 scrollbar-track-secondery overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full ">
        <div className="">
          <NavLink href="/" Icon={HiHome} title="Home" active={true} />
          <NavLink
            href="/explore"
            Icon={MdExplore}
            title="Explore"
            active={false}
          />
          <hr className="border-hr my-3 mx-2 lg:mx-7 horizontL" />
        </div>

        <div className="">
          <NavLink
            href="/playlists"
            Icon={RiPlayList2Fill}
            title="Playlists"
            active={false}
          />
          <NavLink
            href="/history"
            Icon={BiHistory}
            title="History"
            active={false}
          />
          {user && (
            <>
              {/* <NavLink
                href="/ownVideos"
                Icon={MdOutlineSlowMotionVideo}
                title="Your Videos"
                active={false}
              /> */}
              <NavLink
                href="/"
                Icon={MdWatchLater}
                title="Watch later"
                active={false}
              />
              <NavLink
                href="/likedVideos"
                Icon={AiTwotoneLike}
                title="Liked videos"
                active={false}
              />
            </>
          )}

          <hr className="border-hr my-3 mx-2 lg:mx-7 horizontL" />
        </div>
        {user && (
          <>
            <div className="">
              <div className="pb-5 pt-3 text-xl font-bold text-hr flex justify-center items-center lg:px-10">
                <MdSubscriptions className="text-orange block" />
                <div className="lg:ml-3 font-semibold hidden lg:block lg:text-xl text-white">
                  Subscriptions
                </div>
              </div>
              <div className=" text-icon font-medium">
                {isLoading ? (
                  <div className="flex items-center justify-center lg:justify-start mb-1 py-2 px-1 lg:px-10">
                    <LoadingComponent />
                  </div>
                ) : (
                  subscriptions.map((channel: Channel) => (
                    <Link key={channel.slug} href={`/channel/${channel.slug}`}>
                      <div className="flex cursor-pointer items-center justify-center lg:justify-start mb-1 hover:bg-hovColor py-2 px-1 xl:px-10">
                        <Image
                          alt={channel.channelName}
                          loading={"lazy"}
                          height="30px"
                          width="30px"
                          src={channel.channelLogo.url}
                        />
                        <span className="hidden md:block ml-3 text-sm">
                          {" "}
                          {channel.channelName}
                        </span>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
