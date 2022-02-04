import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import Avater from "../../Avater/Avater";

interface Props {
  videoUrl: string;
  thumbnailUrl: string;
  title: string;
  channelName: string;
  timeStamp: string;
  views: number;
}

function VideoCard({
  videoUrl,
  thumbnailUrl,
  title,
  channelName,
  timeStamp,
  views,
}: Props) {
  return (
    <Link href={videoUrl}>
      <div className="cursor-pointer h-full px-5 lg:w-1/3 md:w-1/2 w-full">
        <a className="block relative h-48 rounded overflow-hidden mb-1">
          {thumbnailUrl && (
            <Image
              alt="ecommerce"
              height="720px"
              width="1280px"
              className="object-cover object-center w-full h-full block rounded-3xl"
              src={thumbnailUrl}
            />
          )}
        </a>
        <div className="flex items-center justify-between mb-10">
          <div className="flex">
            <div>
              <Avater name="Retro gaming" src="/src/img/avater.png" />
            </div>
            <div className="">
              <div>
                {title && (
                  <p className="text-gray-100 title-font text-lg font-medium truncate overflow-hidden">
                    {title}
                  </p>
                )}
                {channelName && (
                  <h3 className="text-gray-700 text-xs tracking-widest title-font mb-1">
                    {channelName}
                  </h3>
                )}
              </div>
              <div className="text-xs tracking-widest flex items-center">
                {views && <span>{views} views</span>}
                <BsDot className="text-orange text-3xl" />
                {timeStamp && <span>{timeStamp}</span>}
              </div>
            </div>
          </div>
          <div className="mr-2 cursor-pointer">
            <BiDotsVerticalRounded className="text-2xl" />
          </div>
        </div>
      </div>
    </Link>
  );
}

VideoCard.propTypes = {};

export default VideoCard;
