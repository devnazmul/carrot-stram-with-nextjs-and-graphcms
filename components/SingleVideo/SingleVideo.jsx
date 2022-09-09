import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiCommentDetail, BiDislike, BiLike, BiShareAlt } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { HiOutlineClipboard, HiOutlineClipboardCheck } from "react-icons/hi";
import { IoCloseSharp, IoNotifications, IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineDescription } from "react-icons/md";
import {
  createSubscription,
  deleteSubscription,
  getSingleSubscription
} from "../../services";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import styles from './SingleVideo.module.css';

export default function SingleVideo({ video, link }) {
  const thumbnail = video[0].thumbnail.url;
  const url = video[0].videoContent;
  const views = video[0].viewsCount;
  const slug = video[0].channel.slug;
  const timeStamp = moment(video[0].publishedAt).format("DD MMM , YYYY");
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [sharePopup, setSharePopup] = useState(false);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    getSingleSubscription(
      slug,
      JSON.parse(localStorage.getItem("UserData"))?.email
    ).then((response) => {
      setIsSubscribe(response.subscriptions?.length === 0 ? false : true);
    });
  }, [video]);

  const handleSubscribe = (channelSlug, authorEmail) => {
    createSubscription(channelSlug, authorEmail).then((response) => {
      if (response) {
        response?.updatedAt && setIsSubscribe(true);
      }
    });
  };
  const handleUnsubscribe = (channelSlug, authorEmail) => {
    deleteSubscription(channelSlug, authorEmail).then((response) => {
      if (response) {
        response?.updatedAt && setIsSubscribe(false);
      }
    });
  };

  const handleLike = () => {
    console.log("Like");
  };
  const handleDislike = () => {
    console.log("Dislike");
  };
  const handleComment = () => {
    console.log("Comment");
  };

  function copyText() {
    var copyText = document.getElementById("link");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    setCopied(true);
  }

  return (
    <div className={styles.container}>

      {sharePopup && (
        <div className={`${styles.sharePopupContainer} glassMor z-10`}>
          <div className={styles.popupCard}>
            <button onClick={()=>{setSharePopup(false); setCopied(false)}} className={styles.popupCloseBtn} >
              <IoCloseSharp className="text-white text-2xl" />
              </button>
            <input
              className={styles.popupInput}
              type="text"
              name="link"
              id="link"
              defaultValue={link}
              disabled
            />
            {
              <>
                {!copied ? (
                  <button title="copy" className="text-white" onClick={copyText}>
                    <HiOutlineClipboard className="text-white text-3xl ml-3" />
                  </button>
                ) : (
                  <HiOutlineClipboardCheck title="copid" className={styles.copiedBtn} />
                )}
              </>
            }
          </div>
        </div>
      )}


      <div className="w-9/12 flex justify-center self-center mx-auto mb-10">
        <VideoPlayer thumbnail={thumbnail} url={url} />
      </div>
      <div className="px-5 mt-5">
        <div>
          <h1 className="xl:text-3xl lg:text-2xl md:text-2xl sm:text-2xl text-xl mt-3 font-medium">
            {video[0].title}
          </h1>
          <span className="mt-5 flex items-center">
            <Link href={`/channel/${video[0].channel.slug}`}>
              <span className="cursor-pointer mr-2 flex items-center">
                <Image
                  className="rounded-full"
                  src={
                    video[0].channel.channelLogo?.url
                      ? video[0].channel.channelLogo?.url
                      : "/src/img/no-image.png"
                  }
                  width={25}
                  height={25}
                />
              </span>
            </Link>
            <span className="cursor-pointer text-sm  flex items-center">
              <Link href={`/channel/${video[0].channel.slug}`}>
                {video[0].channel.channelName}
              </Link>
              <button
                onClick={() => {
                  !isSubscribe
                    ? handleSubscribe(
                        video[0].channel.slug,
                        JSON.parse(localStorage.getItem("UserData"))?.email
                      )
                    : handleUnsubscribe(
                        video[0].channel.slug,
                        JSON.parse(localStorage.getItem("UserData"))?.email
                      );
                }}
                title={!isSubscribe ? "subscribe" : "unsubscribe"}
              >
                {!isSubscribe ? (
                  <IoNotificationsOutline className="text-orange text-lg ml-2" />
                ) : (
                  <IoNotifications className="text-orange text-lg ml-2" />
                )}
              </button>
            </span>
          </span>
        </div>

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
            <button
              onClick={() => handleLike()}
              className="flex text-green-500 justify-center items-center"
            >
              <BiLike />{" "}
              <span className="ml-2 text-xs block bg-secondery rounded-full px-3 py-0.5">
                {video[0].likeCount}
              </span>
            </button>
            <button
              onClick={() => handleDislike()}
              className="ml-5 flex  text-red-500 justify-center items-center"
            >
              <BiDislike />
              <span className="ml-2 text-xs block bg-secondery rounded-full px-3 py-0.5">
                {video[0].likeCount}
              </span>
            </button>
            <button
              onClick={() => handleComment()}
              className="ml-5 flex text-yellow-500 justify-center items-center"
            >
              <BiCommentDetail />{" "}
              <span className="ml-2 text-xs block bg-secondery rounded-full px-3 py-0.5">
                {video[0].likeCount}
              </span>
            </button>
            <button
              onClick={() => setSharePopup(true)}
              className="ml-5 text-purple-500 flex float-right justify-center items-center"
            >
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
          <p>{video[0]?.description}</p>
          {/* <Markup className="w-full htmlContent" content={video[0]?.description?.html} /> */}
        </div>
      </div>
    </div>
  );
}
