import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
import React from "react";

export default function VideoPlayer({ url }) {
  return (
    <div className="w-full rounded-lg overflow-hidden">
      <Plyr
        source={{
          type:'video',
          sources: [{
              src: url
            }],
          
          }}
          
      />
    </div>
  );
}
