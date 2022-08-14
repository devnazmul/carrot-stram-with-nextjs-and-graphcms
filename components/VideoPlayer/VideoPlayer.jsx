import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";

export default function VideoPlayer({ url,thumbnail }) {
  // plyr docs : https://github.com/sampotts/plyr#the-source-setter 
  return (
    <div className="w-full rounded-lg overflow-hidden">
      <Plyr
        source={{
          type:'video',
          sources: [{
              src: url,
              type:'video/mp4'
            }],
            poster: thumbnail,
          }}
          
      />
    </div>
  );
}
