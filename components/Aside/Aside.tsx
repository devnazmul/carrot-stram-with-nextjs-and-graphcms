import React from "react";
import { AiTwotoneLike } from "react-icons/ai";
import { BiHistory } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";
import Avater from "../Avater/Avater";
import Logo from "./Logo/Logo";
import NavLink from "./NavLink/NavLink";
export default function Aside() {
  return (
    <div className="flex flex-col w-1/5 bg-secondery z-20 fixed rounded-r-3xl py-5 h-full">
      <Logo />
      <div className="scrollbar-thin scrollbar-thumb-yellow-900 hover:scrollbar-thumb-orange transition-all duration-500 scrollbar-track-secondery overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full ">
        <div className="">
          <NavLink href="/" Icon={HiHome} title="Home" active={true} />
          {/* <NavLink href="/" Icon={MdExplore} title="Explore" active={false} /> */}
          {/* <hr className="border-hr px-10 mx-7 horizontL" /> */}
        </div>

        <div className="">
          <NavLink
            href="/"
            Icon={RiPlayList2Fill}
            title="Playlists"
            active={false}
          />
          <NavLink href="/" Icon={BiHistory} title="History" active={false} />
          <NavLink
            href="/"
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
            href="/"
            Icon={AiTwotoneLike}
            title="Liked videos"
            active={false}
          />
          <hr className="border-hr mx-2 lg:mx-7 horizontL" />
        </div>
        <div className="">
          {/* <div className="py-4 text-xl text-hr px-0 lg:px-10">
            <div className="text-sm lg:text-xl">Subscriptions</div>
          </div> */}
          <div>
            <div className="flex cursor-pointer items-center justify-center lg:justify-start mb-3 hover:bg-hovColor py-2 px-1 lg:px-10">
              <Avater name="Retro gaming" src="/src/img/avater.png" />
              <span className="hidden lg:block"> Retro gaming</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
