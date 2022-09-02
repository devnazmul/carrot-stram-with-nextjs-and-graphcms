import Image from "next/image";
import Link from "next/link";

interface Props {
  playlistData: PlaylistData;
}
interface PlaylistData {
  name: string;
}

function PlaylistCard({ playlistData }: Props) {
  return (
    <>
      <div
        title={playlistData.name}
        className="cursor-pointer hover:bg-secondery relative hover:shadow-2xl mb-5 rounded-3xl h-full px-2 sm:w-1/2 md:w-1/2 lg:w-1/3 w-full"
      >
        <Link href={`video/`}>
          <>
            <span className="block relative w-full -top-5 overflow-hidden mb-2 rounded">
              <span className="z-10 absolute top-0 rounded-xl left-0 w-1/2 h-full bg-black">
                {playlistData.name}
              </span>
              <Image
                loading={"lazy"}
                alt={playlistData.name}
                height="720px"
                width="1280px"
                className="object-cover object-center w-full h-full block rounded-3xl"
                src={`https://source.unsplash.com/random/500×300/?${
                  playlistData.name === "Watch Later"
                    ? "later"
                    : playlistData.name
                }`}
              />
            </span>
          </>
        </Link>
      </div>
    </>
  );
}

export default PlaylistCard;
