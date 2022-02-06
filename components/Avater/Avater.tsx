import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  name: string;
}

const Avater = ({ src, name }: Props) => {
  return (
    <div
      className={`mx-2 cursor-pointer h-12 w-12 lg:h-12 lg:w-12  overflow-hidden border-dotted border-2 p-0.5 border-orange rounded-full `}
    >
      {src && (
        <Image
          title={name}
          src={src}
          height="45px"
          width="45px"
          className="border-dotted border-orange border-2 rounded-full"
        />
      )}
    </div>
  );
};
export default Avater;
