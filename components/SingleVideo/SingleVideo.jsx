import { Markup } from "interweave";
import moment from "moment";
import { BiCommentDetail, BiDislike, BiLike, BiShareAlt } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { MdOutlineDescription } from "react-icons/md";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

export default function SingleVideo({ video }) {
  const url = video[0].videoContent.url;
  const views = video[0].views.length;
  const timeStamp = moment(video[0].publishedAt).format("DD MMM , YYYY");
  
  

  return (
    <div className="px-5">
      <VideoPlayer url={url} />

      <div className="px-5">
        <h1 className="xl:text-3xl lg:text-2xl md:text-2xl sm:text-2xl text-xl mt-3 font-medium">
          {video[0].title}
        </h1>

        <div className="text-xs mt-2 flex items-center justify-between w-full">
          <div className="w-1/3 flex items-center">
            {views && views === 0 ? (
              <span>0 views</span>
            ) : (
              <span>{views} views</span>
            )}
            <BsDot className="text-orange text-3xl" />
            {timeStamp && <span>{timeStamp}</span>}
          </div>

          <div className="flex text-2xl  mt-5 justify-end items-center  pb-5 w-2/3">
            <button className="flex text-green-500 justify-center items-center">
              <BiLike />{" "}
              <span className="ml-2 text-xs block bg-secondery rounded-full px-3 py-0.5">
                {video[0].videoLikes.length}
              </span>
            </button>
            <button className="ml-5 flex  text-red-500 justify-center items-center">
              <BiDislike />
              <span className="ml-2 text-xs block bg-secondery rounded-full px-3 py-0.5">
                {video[0].videoLikes.length}
              </span>
            </button>
            <button className="ml-5 flex text-yellow-500 justify-center items-center">
              <BiCommentDetail />{" "}
              <span className="ml-2 text-xs block bg-secondery rounded-full px-3 py-0.5">
                {video[0].videoLikes.length}
              </span>
            </button>
            <button className="ml-5 text-purple-500 flex float-right justify-center items-center">
              <BiShareAlt />
            </button>
          </div>
        </div>
        <hr className="px-5 border-hr" />
        <div className="w-1/2 inline-block my-5 pb-5">
          <h1 className="font-semibold text-xl flex items-center mb-3">
            Description{" "}
            <MdOutlineDescription className="ml-2 text-2xl bg-black p-1 rounded-full" />
          </h1>
          <Markup className="w-full htmlContent" content={video[0].description.html} />
        </div>
      </div>
    </div>
  );
}
