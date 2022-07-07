import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div
        title="Carrot Stream"
        className="flex justify-center xl:justify-between items-center cursor-pointer  xl:flex-col xl:px-5 mb-5"
      >
        <Image
          alt={"carrot_stream"}
          loading={"lazy"}
          src="/src/img/logo.png"
          width="40px"
          height="40px"
        />
        <span className="-mt-2 text-orange hidden lg:block lg:text-md xl:text-xl font-extrabold">
          Carrot Stream
        </span>
      </div>
    </Link>
  );
}
