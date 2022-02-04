import Image from "next/image";
import React from "react";

export default function MiniVideoCard() {
  return (
    <div className="mx-2 bg-orange h-36 w-20 rounded-2xl object-contain overflow-hidden shadow-lg shadow-shadowColor">
      <Image
        src="/src/img/thum1.jpg"
        layout="responsive"
        height="144px"
        width="80px"
        className="object-cover"
      />
    </div>
  );
}