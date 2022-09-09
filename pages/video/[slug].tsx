import { GetServerSideProps } from "next";
import Layout from "../../components/Layout/Layout";
import SingleVideo from "../../components/SingleVideo/SingleVideo";
import { getSingleVideo } from "../../services";

export const getServerSideProps: GetServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  const video = (await getSingleVideo(pageSlug)) || [];
  return { props: { video, pageSlug } };
};

interface Props {
  video: Array<Video>;
  pageSlug: string;
}
interface Video {
  description: Object;
  channel: Channel;
  videoLikes: Array<VideoLikes>;
  videoContent: String;
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
export default function Video({ video, pageSlug }: Props) {
  return (
    <Layout>
      {
        <div className="text-gray-600 body-font h-screen w-full bg-transparent pl-12 md:pl-48 lg:pl-56 sm:pl-32 pt-7 mt-10">
          <div className="w-full h-full flex mt-10">
            <div className="w-full xl:w-full px-5">
              <SingleVideo
                video={video}
                link={`${process.env.NEXT_PUBLIC_CLIENT_DOMAIN}/video/${pageSlug}`}
              />
            </div>
          </div>
        </div>
      }
    </Layout>
  );
}
