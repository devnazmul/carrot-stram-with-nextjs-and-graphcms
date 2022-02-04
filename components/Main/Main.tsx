import React from "react";
import { getVideos } from "../../services/index";
import Aside from "../Aside/Aside";
import Header from "../Header/Header";
import VideoCard from "./VideoCard/VideoCard";

interface Props {
  videos: Array<object>;
}

export default function Main({ videos }: Props) {
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
              {/* {videos.map((video: any) => { */}
              <VideoCard
                videoUrl="/"
                thumbnailUrl="/src/img/thum1.jpg"
                title="Trass gaiming with retrex"
                channelName="Retrex Gaming"
                timeStamp="28 min ago"
                views={100}
              />
              <VideoCard
                videoUrl="/"
                thumbnailUrl="/src/img/thum1.jpg"
                title="Trass gaiming with retrex"
                channelName="Retrex Gaming"
                timeStamp="28 min ago"
                views={100}
              />
              <VideoCard
                videoUrl="/"
                thumbnailUrl="/src/img/thum1.jpg"
                title="Trass gaiming with retrex"
                channelName="Retrex Gaming"
                timeStamp="28 min ago"
                views={100}
              />
              <VideoCard
                videoUrl="/"
                thumbnailUrl="/src/img/thum1.jpg"
                title="Trass gaiming with retrex"
                channelName="Retrex Gaming"
                timeStamp="28 min ago"
                views={100}
              />
              {/* // })} */}
              {/* <Finised></Finised> */}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  getVideos().then((res) => {
    console.log(res);
    return {
      props: {
        videos: res,
      },
    };
  });
}
