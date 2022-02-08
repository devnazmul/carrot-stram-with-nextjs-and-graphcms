import moment from "moment";
import { GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import { getVideosForHomePage } from "../../services/index";
import VideoCard from "./VideoCard/VideoCard";

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

export default function Main() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getVideosForHomePage().then((data) => {
      setVideos(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="bg-orange text-gray-600 body-font bg-transparent pl-24 lg:pl-72 mt-10">
      <div className="container px-5 py-24 mx-auto">
        {/* <div className="mb-10">
              <MiniVideo />
            </div> */}

        <div className="flex flex-wrap -m-3">
          {isLoading ? (
            <div className="w-96 flex items-center justify-center h-screen text-2xl">
              Loading...
            </div>
          ) : (
            videos.map((video: Video) => (
              <>
                <VideoCard
                  key={video.id}
                  videoUrl={video.id}
                  thumbnailUrl={video.thumbnail.url}
                  title={video.title}
                  channelName={video.channel.channelName}
                  channelAvater={video.channel.channelLogo.url}
                  timeStamp={moment(video.publishedAt).fromNow()}
                  views={video.views.length}
                />
              </>
            ))
          )}
          {/* <Finised></Finised> */}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const videos = (await getVideosForHomePage()) || [];
  return { props: { videos } };
};
