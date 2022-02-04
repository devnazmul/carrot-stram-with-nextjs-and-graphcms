import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <div
        title="Carrot Stram"
        className="flex justify-between cursor-pointer items-center flex-col lg:px-10 mb-5"
      >
        <Image src="/src/img/logo.svg" width="70%" height="40px" />
        <span className="text-orange hidden lg:block lg:text-xl font-extrabold">
          Carrot Stream
        </span>
      </div>
    </Link>
  );
}
