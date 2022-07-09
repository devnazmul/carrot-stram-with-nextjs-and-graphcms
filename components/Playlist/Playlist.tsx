import Link from "next/link";

interface Props {
  name: string;
  color: string;
  playlistSlug: string;
}

export default function Playlist({ name, color, playlistSlug }: Props) {
  return (
    <Link href={`playlist/${playlistSlug}`}>
      <div
        className="w-full transition-all hover:translate-x-3 duration-150 text-white font-semibold h-20 md:h-32 my-1 rounded-3xl overflow-hidden cursor-pointer flex items-center"
        style={{
          backgroundImage: `url(https://source.unsplash.com/random/500×200/?${
            name === "Watch Later" ? "later" : name
          })`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          WebkitBackgroundSize: "cover",
        }}
      >
        <div
          style={{
            backgroundImage: color,
          }}
          className="w-full text-white font-semibold h-full rounded-3xl px-5 text-2xl flex items-center"
        >
          {name}
        </div>
      </div>
    </Link>
  );
}
