import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import { getVideos } from "../../services/index";
import Aside from "../Aside/Aside";
import Header from "../Header/Header";
import VideoCard from "./VideoCard/VideoCard";

export default function Main() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getVideos().then((data) => {
      setVideos(data);
      setIsLoading(false);
    });
  });

  return (
    <main className="bg-primary">
      <Header />
      <div className="flex">
        <Aside />
        <section className="text-gray-600 body-font bg-transparent pl-24 lg:pl-72 mt-10">
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
                videos.map(() => (
                  <VideoCard
                    videoUrl="/"
                    thumbnailUrl="/src/img/thum1.jpg"
                    title="Trass gaiming with retrex"
                    channelName="Retrex Gaming"
                    timeStamp="28 min ago"
                    views={100}
                  />
                ))
              )}
              {/* <Finised></Finised> */}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const videos = (await getVideos()) || [];
  return { props: { videos } };
};
