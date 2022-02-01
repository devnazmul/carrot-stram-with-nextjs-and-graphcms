import Image from "next/image";
import React from "react";

const Avater = () => {
  return (
    <div
      className={`mx-2 cursor-pointer h-12 w-12 border-dotted rounded-full overflow-hidden border-2 p-1 border-orange`}
    >
      <Image
        src="/src/img/avater.png"
        height="40px"
        width="40px"
        className="rounded-full"
      />
    </div>
  );
};
export default Avater;
