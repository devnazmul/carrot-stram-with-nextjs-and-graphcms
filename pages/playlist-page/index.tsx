import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import Layout from "../../components/Layout/Layout";
import { getUserChannels } from "../../services";
import styles from "./PlaylistPage.module.css";
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
        <title>Playlist | Carrot Stream</title>
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
                  <div className={styles.container}>
                    <h1 className={styles.h1}>Select a channel</h1>
                    {channels.map((ch: any) => (
                      <Link key={ch.slug} href={`playlists/${ch.slug}`}>
                        <span className={styles.playlistContainer}>
                          <Image
                            className="rounded-full"
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
                  <div className={styles.createChannelContainer}>
                    <Link href={"/createChannel"}>
                      <span
                        title="Create Channel"
                        className={styles.createChannelWrapper}
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
                    <h1 className="text-hr text-4xl mb-1 text-center">
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
          <div className="pl-28 sm:pl-36 md:pl-44 lg:pl-56 xl:pl-60 pt-32 mr-10 w-full flex text-lg text-gray-600 font-bold flex-col  justify-center items-center h-screen">
            <h1 className="text-orange text-2xl mb-32">
              Please log in for creating playlist.
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
