import Image from "next/image";
import React from "react";
import { AiTwotoneLike } from "react-icons/ai";
import { BiHistory } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import {
  MdExplore,
  MdOutlineSlowMotionVideo,
  MdWatchLater,
} from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";
import Avater from "../Avater/Avater";
export default function Aside() {
  return (
    <div className="flex flex-col w-1/5 bg-secondery z-20 fixed rounded-3xl ml-1  py-5  h-full">
      <div className="flex justify-between items-center mb-5 px-10">
        <Image src="/src/img/carrot.png" width="450px" height="90px" />
      </div>
      <div className="scrollbar-thin scrollbar-thumb-yellow-900 hover:scrollbar-thumb-orange transition-all duration-500 scrollbar-track-secondery overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full ">
        <div className="">
          <div className=" py-4 bg-hovColor px-10 flex items-center">
            <HiHome className="text-2xl mr-3 text-orange" />
            <div className="text-white">Home</div>
          </div>
          <div className="py-4 hover:bg-hovColor px-10 flex items-center">
            <MdExplore className="text-icon text-2xl mr-3" />
            <div>Explore</div>
          </div>

          <hr className="border-hr px-10 mx-7 horizontL" />
        </div>
        <div className="">
          <div className=" py-4 hover:bg-hovColor px-10 flex items-center">
            <RiPlayList2Fill className="text-icon text-2xl mr-3" />
            <div>Playlists</div>
          </div>
          <div className="py-4 hover:bg-hovColor px-10 flex items-center">
            <BiHistory className="text-icon text-2xl mr-3" />
            <div>History</div>
          </div>
          <div className="py-4 hover:bg-hovColor px-10 flex items-center">
            <MdOutlineSlowMotionVideo className="text-icon text-2xl mr-3" />
            <div>Your Videos</div>
          </div>
          <div className="py-4 hover:bg-hovColor px-10 flex items-center">
            <MdWatchLater className="text-icon text-2xl mr-3" />
            <div>Watch later</div>
          </div>
          <div className="py-4 hover:bg-hovColor px-10 flex items-center">
            <AiTwotoneLike className="text-icon text-2xl mr-3" />
            <div>Liked videos</div>
          </div>
          <hr className="border-hr  mx-7 horizontL" />
        </div>
        <div className="">
          <div className="py-4 text-xl text-hr  px-10">
            <div>Subscriptions</div>
          </div>
          <div>
            <div className="flex items-center mb-3 hover:bg-hovColor py-2 px-10">
              <Avater /> Retro gaming
            </div>
            <div className="flex items-center mb-3 hover:bg-hovColor py-2 px-10">
              <Avater /> Retro gaming
            </div>
            <div className="flex items-center mb-3 hover:bg-hovColor py-2 px-10">
              <Avater /> Retro gaming
            </div>
            <div className="flex items-center mb-3 hover:bg-hovColor py-2 px-10">
              <Avater /> Retro gaming
            </div>
            <div className="flex items-center mb-3 hover:bg-hovColor py-2 px-10">
              <Avater /> Retro gaming
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
