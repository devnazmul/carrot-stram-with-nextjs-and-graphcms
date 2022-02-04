import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  name: string;
}

const Avater = ({ src, name }: Props) => {
  return (
    <div
      className={`mx-2 cursor-pointer h-12 w-10 lg:w-12  overflow-hidden  p-1 `}
    >
      {src && (
        <Image
          title={name}
          src={src}
          height="40px"
          width="40px"
          className="border-dotted border-orange border-2 rounded-full"
        />
      )}
    </div>
  );
};
export default Avater;
