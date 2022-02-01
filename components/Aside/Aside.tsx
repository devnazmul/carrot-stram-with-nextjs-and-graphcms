import Image from "next/image";
import React from "react";

export default function Aside() {
  return (
    <div className="flex flex-col w-1/5 bg-secondery z-20 fixed rounded-3xl ml-1 px-10 py-5  h-full">
      <div className="flex justify-between items-center mb-5">
        <Image src="/src/img/carrot.png" width="450px" height="90px" />
      </div>

      <div>
        <div className="border-t border-icon py-2">Categories</div>
        <div className="border-t border-icon py-2">Categories</div>
        <div className="border-t border-icon py-2">Categories</div>
        <div className="border-t border-icon py-2">Categories</div>
      </div>
    </div>
  );
}
