import Image from "next/image";
import Link from "next/link";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsDot } from "react-icons/bs";

interface Props {
  videoSlug: string;
  thumbnailUrl: string;
  title: string;
  channelName: string;
  timeStamp: string;
  views: number;
  channelAvater: string;
}

// function get_time_diff(datetime: string) {
//   var datetime =
//     typeof datetime !== "undefined" ? datetime : "2014-01-01 01:02:03.123456";

//   var datetime = new Date(datetime).getTime();
//   var now = new Date().getTime();

//   if (isNaN(datetime)) {
//     return "";
//   }

//   console.log(datetime + " " + now);

//   if (datetime < now) {
//     var milisec_diff = now - datetime;
//   } else {
//     var milisec_diff = datetime - now;
//   }

//   var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));

//   var date_diff = new Date(milisec_diff);

//   return (
//     days +
//     " Days " +
//     date_diff.getHours() +
//     " Hours " +
//     date_diff.getMinutes() +
//     " Minutes " +
//     date_diff.getSeconds() +
//     " Seconds"
//   );
// }

function VideoCard({
  videoSlug,
  thumbnailUrl,
  title,
  channelName,
  timeStamp,
  views,
  channelAvater,
}: Props) {
  return (
    <Link href={`video/${videoSlug}`}>
      <div className="cursor-pointer hover:shadow-2xl mb-5 rounded-3xl h-full px-2 sm:w-1/2 md:w-1/2 lg:w-1/3 w-full">
        <a className="block relative w-full overflow-hidden mb-2 rounded">
          {thumbnailUrl && (
            <Image
              loading={"lazy"}
              alt="e-commerce"
              height="720px"
              width="1280px"
              className="object-cover object-center w-full h-full block rounded-3xl"
              src={thumbnailUrl}
            />
          )}
        </a>
        <div className="flex items-center justify-between mb-5">
          <div className="flex">
            <div className="">
              <div className="flex">
                <div title={channelName} className="">
                  <Image
                    loading={"lazy"}
                    alt={channelName}
                    src={channelAvater}
                    height={70}
                    width={70}
                  />
                </div>
                <div className="ml-3">
                  {title && (
                    <p className="text-gray-100 h-10 title-font text-sm font-medium overflow-hidden">
                      {title.length > 65
                        ? title.substring(0, 60) + ` ....`
                        : title}
                    </p>
                  )}
                  {channelName && (
                    <h3 className="text-gray-700 text-xs tracking-widest title-font mb-1">
                      {channelName}
                    </h3>
                  )}
                  <div className="text-xs tracking-widest flex items-center">
                    {views && views === 0 ? (
                      <span>0 views</span>
                    ) : (
                      <span>{views} views</span>
                    )}
                    <BsDot className="text-orange text-3xl" />
                    {timeStamp && <span>{timeStamp}</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mr-0 cursor-pointer">
            <BiDotsVerticalRounded className="text-2xl" />
          </div>
        </div>
      </div>
    </Link>
  );
}

VideoCard.propTypes = {};

export default VideoCard;
