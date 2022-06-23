import { useEffect, useState } from "react";
import { useTheme, useVideo } from "contexts/contexts";
import { Link } from "react-router-dom";
import { MdMoreVert, MdWatchLater, MdOutlineWatchLater } from "react-icons/md";
import { IoHeartSharp, IoHeartOutline } from "react-icons/io5";
import "styles/videolisting.css";

export default function VideoCard({ video }) {
  const { theme } = useTheme();
  const [showOptions, setShowOptions] = useState(false);
  const userToken = localStorage.getItem("userToken");

  const {
    helperFunctions: {
      addToWatchlist,
      removeFromWatchlist,
      addToLikedList,
      removeFromLikedList,
    },
    videoDispatch,
    videoData: { watchList, likedList },
  } = useVideo();

  const {
    id,
    thumbnail: { url },
    title,
    creatorImg,
    creator,
    views,
  } = video;

  const inWatchList = watchList.some((item) => item._id === video._id);
  const inLikedList = likedList.some((item) => item._id === video._id);

  useEffect(() => {
    if (showOptions) {
      setTimeout(() => setShowOptions(false), 3000);
    }
    return clearTimeout();
  }, [showOptions]);

  return (
    <div>
      <div
        className={theme === "light" ? "video-card shadow" : "video-card"}
        key={id}
      >
        <Link to={`/video/${video.videoId}`}>
          <img src={url} alt={title} className="video-thumbnail" />
        </Link>
        <div className="video-details">
          <img src={creatorImg} className="creator-dp" />
          <div className="creator-text">
            <h3 title={title} className="video-title">
              {title}
            </h3>
            <p className="video-creator p-sm p-grey">{creator}</p>
            <p className="video-views p-sm p-grey">{views} views</p>
          </div>
          <div>
            <MdMoreVert
              className={showOptions ? "more-options active" : "more-options"}
              onClick={() => setShowOptions((prev) => !prev)}
            />
            <div
              className={
                showOptions ? "options-dialog shadow" : "options-dialog hide"
              }
            >
              {inWatchList ? (
                <button
                  className="options"
                  onClick={() => {
                    removeFromWatchlist(video, userToken, videoDispatch);
                  }}
                >
                  <MdWatchLater /> Remove from Watch Later
                </button>
              ) : (
                <button
                  className="options"
                  onClick={() => {
                    addToWatchlist(video, userToken, videoDispatch);
                  }}
                >
                  <MdOutlineWatchLater />
                  Add to Watch Later
                </button>
              )}
              {inLikedList ? (
                <button
                  className="options"
                  onClick={() => {
                    removeFromLikedList(video, userToken, videoDispatch);
                  }}
                >
                  <IoHeartSharp /> Remove from Liked Videos
                </button>
              ) : (
                <button
                  className="options"
                  onClick={() => {
                    addToLikedList(video, userToken, videoDispatch);
                  }}
                >
                  <IoHeartOutline />
                  Add to Liked Videos
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
