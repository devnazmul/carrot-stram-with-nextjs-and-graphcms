import { Orbit } from "@uiball/loaders";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiBell } from "react-icons/bi";
import Layout from "../../components/Layout/Layout";
import { getSingleChannel } from "../../services";

export default function channel({ slug }) {
  const [channel, setChannel] = useState();
  useEffect(() => {
    getSingleChannel(slug).then((ch) => {
      setChannel(ch);
      console.log(ch);
    });
  }, [slug]);

  return (
    <Layout>
      <Head>
        <title>{slug.split("-").join(" ")} | Carrot Stream</title>
        <meta
          name="description"
          content={`In this page your ${slug.split("-").join(" ")} playlist`}
        />
      </Head>
      <div className="pt-10 h-screen w-full  relative">
        {!channel ? (
          <div className="absolute top-1/2 right-0 left-72 mx-auto max-w-max">
            <Orbit size={70} speed={1.5} color="#f96c0f" />
          </div>
        ) : (
          <>
            <div className="">
              <Image
                className=""
                src={channel.channelBanner.url}
                width={window.innerWidth}
                height={250}
                objectFit={"cover"}
                loading={"lazy"}
              />
              <div className="pl-16 lg:pl-60 relative">
                <span className="absolute w-1/2 -top-9 flex items-center">
                  <Image
                    className=""
                    src={channel.channelLogo.url}
                    width={150}
                    height={150}
                    loading={"lazy"}
                  />
                  <span className="">
                    <h1 className="text-white font-semibold text-4xl pt-5 ">
                      {channel.channelName}
                    </h1>
                    <p className="text-hr mt-5 flex items-center">
                      <span>{channel.subscribers.length} subscribers</span>
                      <button className="transition-all duration-150 hover:scale-105 flex items-center ml-3 border rounded-lg border-orange text-orange font-medium px-3 py-1">
                        SUBSCRIBE
                        <BiBell className="ml-3" />
                      </button>
                    </p>
                  </span>
                </span>
                {channel.videos.map((video) => {

<React.Fragment key={video.slug}>
  {console.log('vvvvvvvvvv',video)}
<Link href={`/video/${video.slug}`}>
  <Image src={video.thumbnail.url} width={236} height={132} />
</Link>
<Link href={`/video/${video.slug}`}>
  <h2>{video.title}</h2>
  </Link>
  <span className="flex items-center justify-start">
   <h2>{video.views.length}</h2>
  <h2>{video.updatedAt}</h2> 
  </span>
</React.Fragment>
})}
              </div>
            </div>
            {/* <div className="pl-16 lg:pl-60 pt-96"> */}
              {/* <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-3"> */}
                  
                {/* </div>
              </div> */}
            {/* </div> */}
          </>
        )}
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
