import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout/Layout";
import Playlist from "../../components/Playlist/Playlist";
import { getPlaylists } from "../../services";
import { generateGrad } from "../../services/genarateGrad";

export const getStaticProps: GetStaticProps = async () => {
  const playlists = (await getPlaylists()) || [];
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
  const [isHavePlaylist, setIsHavePlaylist] = React.useState(false);
  return (
    <Layout>
      {!isHavePlaylist ? (
        <div className="pl-24 lg:pl-72 h-screen w-full flex text-gray-600 font-bold flex-col  justify-center items-center">
          <Image
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
        <div className="pl-24 lg:pl-72 h-screen w-full flex justify-center items-center mt-10">
          <div className="w-full flex flex-col px-10">
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
      )}
    </Layout>
  );
}
