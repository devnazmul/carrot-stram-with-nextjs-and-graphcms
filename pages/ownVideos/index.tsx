import moment from "moment";
import Head from "next/head";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import VideoCard from "../../components/Main/VideoCard/VideoCard";
import { getOwnVideos } from "../../services";

interface Videos {
  title: string;
  slug: string;
  thumbnail: Thumbnail;
  channel: Channel;
  publishedAt: string;
  views: Array<Int16Array>;
}

interface Channel {
  channelName: string;
  channelLogo: ChannelLogo;
  slug: string;
}
interface ChannelLogo {
  url: string;
}
interface Thumbnail {
  url: string;
}
interface User {
  email: string;
}

export default function index() {
  const [videos, setVideos] = useState<Array<Videos> | null>([]);
  const [user, setUser] = useState<User | null>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("UserData") || "false"));
  }, []);

  useEffect(() => {
    getOwnVideos(user?.email && user?.email).then((res) => {
      setVideos(res);
      setIsLoading(false);
    });
  }, [user]);

  return (
    <Layout>
      <Head>
        <title>My Videos | Carrot Stream</title>
        <meta name="description" content="In this is your videos." />
      </Head>
      {!isLoading ? (
        <div className="text-gray-600 body-font relative bg-transparent pl-24 sm:pl-28 md:pl-40 lg:pl-60 mt-10">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-3">
              {videos &&
                videos.map((video) => (
                  <VideoCard
                    key={video.slug}
                    videoSlug={video.slug}
                    thumbnailUrl={video.thumbnail.url}
                    title={video.title}
                    channelName={video.channel.channelName}
                    channelAvater={
                      video.channel.channelLogo?.url
                        ? video.channel.channelLogo.url
                        : "/src/img/no-image.png"
                    }
                    timeStamp={moment(video.publishedAt).fromNow()}
                    views={video.views.length}
                    slug={video.channel.slug}
                  />
                ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full mx-auto h-screen flex justify-center items-center pl-24 sm:pl-28 md:pl-40 lg:pl-60 mt-10">
          <h1 className="text-4xl text-hr font-semibold">Loading...</h1>
        </div>
      )}
    </Layout>
  );
}
