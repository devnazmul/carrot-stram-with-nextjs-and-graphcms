import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiTwotoneLike } from "react-icons/ai";
import { BiHistory } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import {
  MdExplore,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
} from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";
import { getSubscribedChannels } from "../../services/index";
import LoadingComponent from "../Loading/LoadingComponent";
import Logo from "./Logo/Logo";
import NavLink from "./NavLink/NavLink";

interface Channel {
  id: string;
  channelName: string;
  channelLogo: ChannelLogo;
}
interface ChannelLogo {
  url: string;
}

export default function Aside() {
  const [channels, setChannels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getSubscriptions = async () => {
      const videos = (await getSubscribedChannels()) || [];
      return videos;
    };
    getSubscriptions().then((data) => {
      setChannels(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="flex flex-col w-1/5 bg-secondery z-20 fixed rounded-r-3xl py-5 h-full">
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
          <NavLink
            href="/ownVideos"
            Icon={MdOutlineSlowMotionVideo}
            title="Your Videos"
            active={false}
          />
          {/* <NavLink
            href="/"
            Icon={MdWatchLater}
            title="Watch later"
            active={false}
          /> */}
          <NavLink
            href="/likedVideos"
            Icon={AiTwotoneLike}
            title="Liked videos"
            active={false}
          />
          <hr className="border-hr my-3 mx-2 lg:mx-7 horizontL" />
        </div>
        <div className="">
          <div className="pb-5 pt-3 text-xl font-bold text-hr flex justify-center items-center lg:px-10">
            <MdSubscriptions className="text-orange hidden lg:block" />
            <div className="lg:ml-3 font-semibold text-xs lg:text-xl text-white">
              Subscriptions
            </div>
          </div>
          <div className=" text-icon font-medium">
            {isLoading ? (
              <div className="flex items-center justify-center lg:justify-start mb-1 py-2 px-1 lg:px-10">
                <LoadingComponent />
              </div>
            ) : (
              channels.map((channel: Channel) => (
                <Link key={channel.id} href="/">
                  <div className="flex cursor-pointer items-center justify-center lg:justify-start mb-1 hover:bg-hovColor py-2 px-1 xl:px-10">
                    <Image
                      height="30px"
                      width="30px"
                      alt={channel.channelName}
                      src={channel.channelLogo.url}
                    />
                    <span className="hidden xl:block ml-3 text-sm">
                      {" "}
                      {channel.channelName}
                    </span>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
