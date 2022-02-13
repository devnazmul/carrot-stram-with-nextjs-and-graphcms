import moment from "moment";
import React from "react";
import VideoCard from "./VideoCard/VideoCard";

interface Props {
  videos: any;
}

interface Video {
  publishedAt: string;
  channel: Channel;
  description: string;
  id: string;
  title: string;
  views: Array<Int16Array>;
  videoContent: object;
  thumbnail: Thumbnail;
}
interface Thumbnail {
  url: string;
}
interface Channel {
  url: string;
  channelLogo: ChannelLogo;
  channelName: string;
}
interface ChannelLogo {
  url: string;
}

interface Avatar {
  url: string;
}

export default function Main({ videos }: Props) {
  return (
    <div className="bg-orange text-gray-600 body-font bg-transparent pl-24 lg:pl-72 mt-10">
      <div className="container px-5 py-24 mx-auto">
        {/* <div className="mb-10">
              <MiniVideo />
            </div> */}

        <div className="flex flex-wrap -m-3">
          {videos.map((video: Video) => (
            <React.Fragment key={video.id}>
              <VideoCard
                videoUrl={video.id}
                thumbnailUrl={video.thumbnail.url}
                title={video.title}
                channelName={video.channel.channelName}
                channelAvater={video.channel.channelLogo.url}
                timeStamp={moment(video.publishedAt).fromNow()}
                views={video.views.length}
              />
            </React.Fragment>
          ))}
          {/* <Finised></Finised> */}
        </div>
      </div>
    </div>
  );
}
