import Image from "next/image";
import React, { useState } from "react";

interface Props {
  video: Array<Video>;
}
interface Video {
  channel: Channel;
}
interface Channel {
  videos: Array<Videos>;
}
interface Videos {
  title: string;
  thumbnail: Thumbnail;
}
interface Thumbnail {
  url: string;
}
interface Video {
  title: string;
  thumbnail: Thumbnail;
}
export default function SideBarVideo({ video }: Props) {
  const [videos, setVideos] = useState(video[0].channel.videos);
  console.log(videos);

  return (
    <div className="pt-5 flex items-center flex-col px-2 w-full">
      <div className="bg-secondery  relative cursor-pointer overflow-hidden w-full h-40 rounded-xl mt-4   ">
        <Image
          title={video[0].channel.videos[0].title}
          src={video[0].channel.videos[0].thumbnail.url}
          height="200px"
          width="350px"
        />
        <div className="absolute bottom-0 text-white px-5 h-32 flex items-end w-full pb-3 font-semibold left-0 bg-gradient-to-t from-black to-transparent">
          {video[0].channel.videos[0].title}
        </div>
      </div>
    </div>
  );
}
