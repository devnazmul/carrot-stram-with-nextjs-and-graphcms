import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import Layout from "../../components/Layout/Layout";
import { getUserChannels } from "../../services";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function index() {
  const [user, setUser] = useState<any | null>();
  const [channels, setChannels] = useState<any | null>([]);
  const [isUserLoading, setIsUserLoading] = useState<boolean>(true);
  const [isChannelLoading, setIsChannelLoading] = useState<boolean>(true);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("UserData") || "false"));
    setIsUserLoading(false);
  }, []);

  useEffect(() => {
    user &&
      getUserChannels(user?.slug).then((channels) => {
        setChannels(channels);
        setIsChannelLoading(false);
      });
  }, [user]);

  return (
    <Layout>
      <Head>
        <title>Upload Video | Carrot Stream</title>
        <meta
          name="description"
          content="In this page you can upload video on your channel"
        />
      </Head>
      {!isUserLoading ? (
        user ? (
          <>
            {!isChannelLoading && (
              <>
                {channels.length > 0 ? (
                  <div className="pl-28 sm:pl-36 md:pl-44 lg:pl-56 xl:pl-60 pt-32 mr-10 w-full flex text-lg text-gray-600 font-bold flex-col  justify-center items-center">
                    <h1 className="text-orange text-2xl mb-5">
                      Select a channel
                    </h1>
                    {channels.map((ch: any) => (
                      <Link key={ch.slug} href={`upload/${ch.slug}`}>
                        <span className="w-full my-2 transition-all hover:translate-x-3 duration-150 hover:bg-orange hover:text-hovColor flex justify-start py-5 px-5 rounded-xl bg-hovColor items-center cursor-pointer">
                          <Image
                            src={
                              ch.channelLogo?.url
                                ? ch.channelLogo.url
                                : "/src/img/no-image.png"
                            }
                            alt={ch.channelName}
                            width={50}
                            height={50}
                          />
                          <span className="ml-5">{ch.channelName}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="pl-24 lg:pl-72 pt-32 w-full flex text-lg text-gray-600 font-bold flex-col  justify-center items-center relative">
                    <Link href={"/createChannel"}>
                      <span
                        title="Create Channel"
                        className="transition-all hover:scale-105 duration-150 absolute right-5 md:right-10 top-28 cursor-pointer bg-orange rounded-full px-3 py-3 md:px-5 md:py-3 flex justify-center items-center text-hovColor"
                      >
                        <BiPlus className="text-2xl" />
                        <span className="md:block hidden"> Create channel</span>
                      </span>
                    </Link>
                    <Image
                      src={"/src/img/empty.png"}
                      width={200}
                      height={200}
                      loading={"lazy"}
                    />
                    <h1 className="text-hr text-4xl mb-2 text-center">
                      You have no channel!
                    </h1>
                    <p className="text-hr text-center font-mono">
                      for upload a video you have to create a channel first.
                    </p>
                  </div>
                )}
              </>
            )}
          </>
        ) : (
          <div className="pl-28 sm:pl-36 md:pl-44 lg:pl-56 xl:pl-60 pt-32 mr-10 w-full flex text-lg text-gray-600 font-bold flex-col  justify-center items-center">
            <h1 className="text-orange text-2xl mb-5">
              Please log in for uploading video.
            </h1>
          </div>
        )
      ) : (
        <div className="absolute top-1/3 right-0 left-0 mx-auto max-w-max">
          Loading.......
        </div>
      )}
    </Layout>
  );
}
