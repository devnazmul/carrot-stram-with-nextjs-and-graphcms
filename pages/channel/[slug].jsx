import { Orbit } from "@uiball/loaders";
import moment from "moment";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineCrown } from "react-icons/ai";
import { BiVideo } from "react-icons/bi";
import { BsInfoSquare } from "react-icons/bs";
import { GiPlatform } from "react-icons/gi";
import { IoNotifications, IoNotificationsOutline } from "react-icons/io5";
import { RiPlayList2Line } from "react-icons/ri";
import Layout from "../../components/Layout/Layout";
import VideoCard from "../../components/Main/VideoCard/VideoCard";
import PlaylistCard from "../../components/PlaylistCard/PlaylistCard";
import StyleButton from "../../components/StyleButton/StyleButton.jsx";
import {
  createSubscription,
  deleteSubscription,
  getOwnVideosBySlug,
  getPlaylistByChannelSlug,
  getSingleChannel,
  getSingleSubscription,
  getTopLikedVideo
} from "../../services";

// interface Video {
//   publishedAt: string;
//   channel: Channel;
//   description: string;
//   id: string;
//   slug: string;
//   title: string;
//   views: Array<Int16Array>;
//   videoContent: object;
//   thumbnail: Thumbnail;
// }
// interface Thumbnail {
//   url: string;
// }
// interface Channel {
//   slug: string;
//   url: string;
//   channelLogo: ChannelLogo;
//   channelName: string;
//   channelBanner: ChannelBanner;
//   subscribers: [];
// }

// interface ChannelBanner {
//   url: string;
// }
// interface ChannelLogo {
//   url: string;
// }

// interface Avatar {
//   url: string;
// }

export default function channel({ slug }) {
  const [videos, setVideos] = useState([]);
  const [channel, setChannel] = useState();
  const [playlists, setPlaylists] = useState([]);
  const [category, setCategory] = useState("Top");
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [countSubscribers, setCountSubscribers] = useState(0);

  useEffect(() => {
    getSingleChannel(slug).then((ch) => {
      setChannel(ch);
      setCountSubscribers(ch.subscribers.length);
    });
    getSingleSubscription(
      slug,
      JSON.parse(localStorage.getItem("UserData"))?.email
    ).then((response) => {
      setIsSubscribe(response.subscriptions?.length === 0 ? false : true);
    });
  }, [slug, isSubscribe]);

  const handleSubscribe = (channelSlug, authorEmail) => {
    createSubscription(channelSlug, authorEmail).then((response) => {
      if (response) {
        response?.updatedAt && setIsSubscribe(true);
      }
    });
  };
  const handleUnsubscribe = (channelSlug, authorEmail) => {
    deleteSubscription(channelSlug, authorEmail).then((response) => {
      if (response) {
        response?.updatedAt && setIsSubscribe(false);
      }
    });
  };

  useEffect(() => {
    switch (category) {
      case "Top":
        getTopLikedVideo(slug).then((response) => {
          setVideos(response);
        });
        break;
      case "Videos":
        getOwnVideosBySlug(slug).then((response) => {
          setVideos(response);
        });
        break;
      case "Playlist":
        getPlaylistByChannelSlug(slug).then((response) => {
          setPlaylists(response);
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
  }, [category, slug]);
  return (
    <Layout>
      <Head>
        <title>{slug.split("-").join(" ")} | Carrot Stream</title>
        <meta
          name="description"
          content={`In this page your ${slug.split("-").join(" ")} playlist`}
        />
      </Head>
      <div className="pl-16 sm:pl-24 md:pl-36 lg:pl-40 xl:pl-44 w-full">
        {!channel ? (
          <div className="absolute top-1/2 right-0 left-72 mx-auto max-w-max">
            <Orbit size={70} speed={1.5} color="#f96c0f" />
          </div>
        ) : (
          <div className="relative">
            <div className="w-full relative h-32 sm:h-48 lg:h-96 mt-5">
              <Image
                className=""
                src={
                  channel.channelBanner?.url
                    ? channel.channelBanner?.url
                    : "/src/img/no-Image-channel-banner.png"
                }
                layout="fill"
                objectFit={"contain"}
                loading={"lazy"}
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2">
              <div className="block">
                <span className="md:mt-10 items-center flex justify-center flex-col">
                  <span className="md:hidden block mb-2">
                    <Image
                      className="block rounded-full"
                      src={
                        channel.channelLogo?.url
                          ? channel.channelLogo?.url
                          : "/src/img/no-image.png"
                      }
                      width={70}
                      height={70}
                      loading={"lazy"}
                    />
                  </span>
                  <span className="hidden md:block lg:hidden mb-2">
                    <Image
                      className="shadow-lg rounded-full"
                      src={
                        channel.channelLogo?.url
                          ? channel.channelLogo?.url
                          : "/src/img/no-image.png"
                      }
                      width={100}
                      height={100}
                      loading={"lazy"}
                    />
                  </span>
                  <span className="hidden lg:block mb-1">
                    <Image
                      className="shadow-lg rounded-full"
                      src={
                        channel.channelLogo?.url
                          ? channel.channelLogo?.url
                          : "/src/img/no-image.png"
                      }
                      width={150}
                      height={150}
                      loading={"lazy"}
                    />
                  </span>
                  <span className="flex justify-between flex-col items-center lg:pt-1">
                    <span className="flex flex-col items-center justify-center">
                      <h1 className="text-white font-semibold text-xl -mt-2 lg:text-3xl lg:pt-5 ">
                        {channel.channelName}
                      </h1>
                      <span className="text-hr">
                        {channel.subscribers.length} subscribers
                      </span>
                    </span>
                    <button
                      className="mt-3"
                      onClick={() => {
                        !isSubscribe
                          ? handleSubscribe(
                              channel.slug,
                              JSON.parse(localStorage.getItem("UserData"))
                                ?.email
                            )
                          : handleUnsubscribe(
                              channel.slug,
                              JSON.parse(localStorage.getItem("UserData"))
                                ?.email
                            );
                      }}
                      title={!isSubscribe ? "subscribe" : "unsubscribe"}
                    >
                      {!isSubscribe ? (
                        <span className="transition-all bg-orange duration-150 hover:scale-105 flex items-center border rounded-lg border-primary text-primary font-medium px-3 py-1 text-sm">
                          SUBSCRIBE
                          <IoNotificationsOutline className="ml-2 text-primary text-lg" />
                        </span>
                      ) : (
                        <span className="transition-all duration-150 hover:scale-105 flex items-center border rounded-lg border-hr text-hr font-medium px-3 py-1 text-sm">
                          UNSUBSCRIBE
                          <IoNotifications className="ml-2 text-hr text-lg" />
                        </span>
                      )}
                    </button>
                  </span>
                </span>
              </div>
            </div>
          </div>
        )}
        <div className="w-full mt-36 md:mt-44 lg:mt-44 lg:pl-3 xl:pl-8">
          <div className="w-auto overflow-x-auto flex justify-between items-center px-5 md:px-6">
            <button title="Top" onClick={() => setCategory("Top")}>
              <StyleButton
                Icon={AiOutlineCrown}
                Title={"Top"}
                Color={"from-orange  to-yellow-400"}
              />
            </button>
            <button title="Videos" onClick={() => setCategory("Videos")}>
              <StyleButton
                Icon={BiVideo}
                Title={"Videos"}
                Color={"from-purple-500  to-blue-400"}
              />
            </button>
            <button title="Playlist" onClick={() => setCategory("Playlist")}>
              <StyleButton
                Icon={RiPlayList2Line}
                Title={"Playlist"}
                Color={"from-purple-500  to-blue-400"}
              />
            </button>
            <button title="About" onClick={() => setCategory("About")}>
              <StyleButton
                Icon={BsInfoSquare}
                Title={"About"}
                Color={"from-orange  to-red-400"}
              />
            </button>
            <button title="Channels" onClick={() => setCategory("Channels")}>
              <StyleButton
                Icon={GiPlatform}
                Title={"Channels"}
                Color={"from-lime-400  to-green-400"}
              />
            </button>
          </div>
          <div className="text-gray-600 body-font bg-transparent mt-0">
            <h1 className="font-bold text-xl lg:text-3xl lg:ml-5 mt-9 text-center mb-16 lg:my-10">
              {category}
            </h1>
            {(category === "Top" || category === "Videos") && (
              <div className="container px-5 py-0 mx-auto">
                <div className="flex flex-wrap -m-3">
                  {videos?.map((video) => (
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
                        views={video.viewsCount}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
            {category === "Playlist" && (
              <>
                {playlists ? (
                  <>
                    {playlists.length !== 0 ? (
                      <div className="container px-5 py-0 mx-auto">
                        <div className="flex flex-wrap -m-3">
                          {playlists?.map((playlist) => (
                            <React.Fragment key={playlist.id}>
                              <div>
                                <PlaylistCard playlistData={playlist} />
                              </div>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="w-full text-gray-600 font-bold">
                        <div className="flex flex-col justify-center items-center mx-auto pb-14">
                          <Image
                            alt={"not_found"}
                            loading={"lazy"}
                            src={"/src/img/not-found.png"}
                            width="200px"
                            height="200px"
                          />
                          <span className=" text-2xl">No playlist found!</span>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                  <div
                className="animate-spin inline-block w-32 h-32 border-[3px] border-current border-t-transparent text-orange rounded-full"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const { slug } = query;
  return {
    props: {
      slug,
    },
  };
}
