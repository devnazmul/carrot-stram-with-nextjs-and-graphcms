import { GetServerSideProps } from "next";
import Image from "next/image";
import Layout from "../../components/Layout/Layout";
import SingleVideo from "../../components/SingleVideo/SingleVideo";
import { getSingleVideo } from "../../services";

export const getServerSideProps: GetServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  const video = (await getSingleVideo(pageSlug)) || [];
  return { props: { video } };
};

interface Props {
  video: Array<Video>;
}
interface Video {
  description: Object;
  channel: Channel;
  videoLikes: Array<VideoLikes>;
}
interface VideoLikes {
  id: string;
}
interface Channel {
  channelName: string;
  channelLogo: ChannelLogo;
  videos: Array<Videos>;
}
interface ChannelLogo {
  url: string;
}
interface Videos {
  thumbnail: Thumbnail;
  title: string;
}
interface Thumbnail {
  url: string;
}
export default function Video({ video }: Props) {
  return (
    <Layout>
      {
        <div className="text-gray-600 body-font h-screen w-full bg-transparent pl-24 md:pl-48 lg:pl-72 sm:pl-32 pt-7 mt-10">
          <div className="w-full h-full flex mt-10">
            <div className="w-full xl:w-full px-5">
              <SingleVideo video={video} />
            </div>

            <div className="w-3/12 overflow-y-auto fixed top-16 pt-10 pr-5 right-0 h-screen  hidden ">
              <div className="bg-secondery sticky -top-10 z-10 shadow-xl pt-10 w-full py-5 rounded-xl px-5">
                <div className="flex justify-center items-center cursor-pointer">
                  <Image
                    src={video[0].channel.channelLogo.url}
                    alt={video[0].channel.channelName}
                  />
                  <div className="ml-3 text-xl">
                    {video[0].channel.channelName}
                  </div>
                </div>
                <span className="mt-5 block text-md text-center">
                  👑 Top views of this channel
                </span>
              </div>

              {/* <SideBarVideo video={video} /> */}
            </div>
          </div>
        </div>
      }
    </Layout>
  );
}
