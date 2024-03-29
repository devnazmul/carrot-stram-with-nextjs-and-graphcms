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
  slug: string;
  title: string;
  views: Array<Int16Array>;
  videoContent: object;
  thumbnail: Thumbnail;
  viewsCount: number;
}
interface Thumbnail {
  url: string;
}
interface Channel {
  slug: string;
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
    <div className="text-gray-600 body-font bg-transparent pl-24 sm:pl-28 md:pl-40 lg:pl-60 mt-10">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-3">
          {videos.map((video: Video) => (
            <React.Fragment key={video.id}>
              {console.log({
                slug: typeof video.slug,
                thumbnailUrl: typeof video.thumbnail.url,
                title: typeof video.title,
                channelName: typeof video.channel?.channelName,
                channelAvater: typeof video.channel?.channelLogo?.url,
                views: typeof video.viewsCount,
              })}
              <VideoCard
                videoSlug={video.slug}
                thumbnailUrl={video.thumbnail.url}
                title={video.title}
                channelName={video.channel?.channelName}
                channelAvater={
                  video.channel?.channelLogo?.url
                    ? video.channel.channelLogo.url
                    : "/src/img/no-image.png"
                }
                timeStamp={moment(video.publishedAt).fromNow()}
                views={video.viewsCount}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
