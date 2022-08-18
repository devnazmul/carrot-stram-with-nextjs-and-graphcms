import { Orbit } from "@uiball/loaders";
import moment from "moment";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineCrown } from "react-icons/ai";
import { BiBell, BiVideo } from "react-icons/bi";
import { BsInfoSquare } from "react-icons/bs";
import { GiPlatform } from "react-icons/gi";
import { RiPlayList2Line } from "react-icons/ri";
import Layout from "../../components/Layout/Layout";
import VideoCard from "../../components/Main/VideoCard/VideoCard";
import { getOwnVideosBySlug, getSingleChannel } from "../../services";

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
}
interface Thumbnail {
  url: string;
}
interface Channel {
  slug: string;
  url: string;
  channelLogo: ChannelLogo;
  channelName: string;
  channelBanner: ChannelBanner;
  subscribers: [];
}

interface ChannelBanner {
  url: string;
}
interface ChannelLogo {
  url: string;
}

interface Avatar {
  url: string;
}

export default function channel({ slug }: any) {
  const [videos, setVideos] = useState<[] | null>([]);
  const [channel, setChannel] = useState<Channel | null>();
  const [category, setCategory] = useState<string | null>("Top");

  useEffect(() => {
    getSingleChannel(slug).then((ch) => {
      setChannel(ch);
    });
  }, [slug]);

  useEffect(() => {
    switch (category) {
      case "Top":
        getOwnVideosBySlug(slug).then((response) => {
          setVideos(response);
        });
        break;
      case "Videos":
        getOwnVideosBySlug(slug).then((response) => {
          setVideos(response);
        });
        break;
      case "Playlist":
        getOwnVideosBySlug(slug).then((response) => {
          setVideos(response);
        });
        break;
      case "About":
        getOwnVideosBySlug(slug).then((response) => {
          setVideos(response);
        });
        break;
      case "Channels":
        getOwnVideosBySlug(slug).then((response) => {
          setVideos(response);
        });
        break;
      default:
        getOwnVideosBySlug(slug).then((response) => {
          setVideos(response);
          console.log(response);
        });
        break;
    }
  }, [category]);
  return (
    <Layout>
      <Head>
        <title>{slug.split("-").join(" ")} | Carrot Stream</title>
        <meta
          name="description"
          content={`In this page your ${slug.split("-").join(" ")} playlist`}
        />
      </Head>
      <div className="pt-10 h-screen w-full relative">
        {!channel ? (
          <div className="absolute top-1/2 right-0 left-72 mx-auto max-w-max">
            <Orbit size={70} speed={1.5} color="#f96c0f" />
          </div>
        ) : (
          <>
            <div className="">
              <Image
                className=""
                src={channel.channelBanner?.url}
                width={window?.innerWidth}
                height={250}
                objectFit={"cover"}
                loading={"lazy"}
              />
              <div className="pl-16 lg:pl-60">
                <div className="block h-32">
                  <span className="relative flex items-start">
                    <span className=" absolute w-1/2 -top-9 flex items-start">
                      <Image
                        className="shadow-lg rounded-full"
                        src={channel.channelLogo.url}
                        width={150}
                        height={150}
                        loading={"lazy"}
                      />
                      <span className="flex justify-between items-center pt-5 ml-5">
                        <span>
                          <h1 className="text-white font-semibold text-3xl pt-5 ">
                            {channel.channelName}
                          </h1>
                          <span className="text-hr">
                            {channel.subscribers.length} subscribers
                          </span>
                        </span>
                        <button className="ml-10 transition-all duration-150 hover:scale-105 flex items-center border rounded-lg border-orange text-orange font-medium px-3 py-1">
                          SUBSCRIBE
                          <BiBell className="ml-3" />
                        </button>
                      </span>
                    </span>
                  </span>
                </div>

                {/* {channel.videos.map((video) => (
                  <React.Fragment key={video.slug}>
                    {console.log("vvvvvvvvvv", video)}
                    <Link href={`/video/${video.slug}`}>
                      <Image
                        src={video.thumbnail.url}
                        width={236}
                        height={132}
                      />
                    </Link>
                    <Link href={`/video/${video.slug}`}>
                      <h2>{video.title}</h2>
                    </Link>
                    <span className="flex items-center justify-start">
                      <h2>{video.views.length}</h2>
                      <h2>{video.updatedAt}</h2>
                    </span>
                  </React.Fragment>
                ))} */}
              </div>
            </div>
          </>
        )}
        <div className="w-full pl-24 sm:pl-28 md:pl-40 lg:pl-60 ">
          <div className="w-auto overflow-x-auto flex justify-between items-center px-5">
            <button
              onClick={() => setCategory("Top")}
              className="transition-all hover:scale-x-110 bg-gradient-to-tr from-orange  to-yellow-400 w-36 h-36 flex justify-center items-center text-xl font-bold text-white rounded-2xl shadow-lg flex-col"
            >
              <AiOutlineCrown className="text-5xl justify-between mb-3 " /> Top
            </button>
            <button
              onClick={() => setCategory("Videos")}
              className="transition-all hover:scale-x-110 bg-gradient-to-tr from-red-500  to-pink-400 w-36 h-36 flex justify-center items-center text-xl font-bold text-white rounded-2xl shadow-lg flex-col"
            >
              <BiVideo className="text-5xl justify-between mb-3 " /> Videos
            </button>
            <button
              onClick={() => setCategory("Playlist")}
              className="transition-all hover:scale-x-110 bg-gradient-to-tr from-purple-500  to-blue-400 w-36 h-36 flex justify-center items-center text-xl font-bold text-white rounded-2xl shadow-lg flex-col"
            >
              <RiPlayList2Line className="text-5xl justify-between mb-3 " />{" "}
              Playlist
            </button>
            <button
              onClick={() => setCategory("About")}
              className="transition-all hover:scale-x-110 bg-gradient-to-tr from-orange  to-red-400 w-36 h-36 flex justify-center items-center text-xl font-bold text-white rounded-2xl shadow-lg flex-col"
            >
              <BsInfoSquare className="text-5xl justify-between mb-3 " /> About
            </button>
            <button
              onClick={() => setCategory("Channels")}
              className="transition-all hover:scale-x-110 bg-gradient-to-tr from-lime-400  to-green-400 w-36 h-36 flex justify-center items-center text-xl font-bold text-white rounded-2xl shadow-lg flex-col"
            >
              <GiPlatform className="text-5xl justify-between mb-3 " />
              Channels
            </button>
          </div>
          <div className="text-gray-600 body-font bg-transparent mt-0">
            <h1 className="font-bold text-3xl ml-5 my-10">{category}</h1>
            <div className="container px-5 py-0 mx-auto">
              <div className="flex flex-wrap -m-3">
                {videos?.map((video: Video) => (
                  <React.Fragment key={video.id}>
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
                      views={video.views.length}
                      slug={video.channel?.slug}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query }: any) {
  const { slug } = query;
  return {
    props: {
      slug,
    },
  };
}
