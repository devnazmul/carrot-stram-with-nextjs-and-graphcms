import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout/Layout";
import Playlist from "../../components/Playlist/Playlist";
import { getPlaylistByChannelSlug } from "../../services";
import { generateGrad } from "../../services/genarateGrad";

export const getServerSideProps: GetServerSideProps = async (contex) => {
  const playlists =
    (await getPlaylistByChannelSlug(contex?.params?.slug)) || [];
  return { props: { playlists } };
};

interface Props {
  playlists: any;
}
interface Playlist {
  id: string;
  name: string;
  slug: string;
}

export default function index({ playlists }: Props) {
  const [user, setUser] = React.useState();
  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("UserData") || "false"));
  }, []);
  const [isHavePlaylist, setIsHavePlaylist] = React.useState(false);
  return (
    <Layout>
      <Head>
        <title>Playlist | Carrot Stream</title>
        <meta
          name="description"
          content="In this page your playlists was stored"
        />
      </Head>
      {user && playlists ? (
        <>
          {!user ? (
            <div className="relative pl-28 sm:pl-36 md:pl-44 lg:pl-56 xl:pl-60 pt-32 h-screen w-full flex  text-gray-600 font-bold flex-col  justify-center items-center">
              <Image
                alt={"not_found"}
                loading={"lazy"}
                src={"/src/img/not-found.png"}
                width="300px"
                height="300px"
              />
              <span className="text-xl lg:text-5xl lg:mt-10">
                please{" "}
                <Link href={"/logIn"}>
                  <span className="text-orange cursor-pointer border-orange">
                    Log in
                  </span>
                </Link>{" "}
                for creating a playlist
              </span>
            </div>
          ) : (
            <>
              {playlists.length !== 0 ? (
                <div className="pl-28 sm:pl-36 md:pl-44 lg:pl-56 xl:pl-60 pt-32 h-screen w-full flex justify-center">
                  <div className="w-full flex flex-col pr-12">
                    {playlists.map((playlist: Playlist) => (
                      <React.Fragment key={playlist.id}>
                        <Playlist
                          playlistSlug={playlist.slug}
                          name={playlist.name}
                          color={generateGrad()}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="w-full flex flex-col  text-gray-600 font-bold  justify-center items-center pl-24 sm:pl-32 md:pl-40 lg:pl-52 xl:pl-56 pt-28 h-full">
                  <Image
                    alt={"not_found"}
                    loading={"lazy"}
                    src={"/src/img/not-found.png"}
                    width="300px"
                    height="300px"
                  />
                  <span className="text-2xl md:text-3 xl lg:text-5xl">
                    No Playlist found!
                  </span>
                </div>
              )}
            </>
          )}
        </>
      ) : (
        <div className="absolute w-full flex justify-center items-center pl-24 sm:pl-32 md:pl-40 lg:pl-52 xl:pl-56 pt-28 h-full">
          <div
            className="animate-spin inline-block w-32 h-32 border-[3px] border-current border-t-transparent text-orange rounded-full"
            role="status"
            aria-label="loading"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </Layout>
  );
}
