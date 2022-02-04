import React from "react";
import MiniVideoCard from "./MiniVideoCard/MiniVideoCard";

export default function MiniVideo() {
  return (
    <div className="flex items-center">
      <MiniVideoCard />
      <MiniVideoCard />
      <MiniVideoCard />
      <MiniVideoCard />
      <MiniVideoCard />
    </div>
  );
}
