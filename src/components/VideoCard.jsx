import { useState } from "react";
import { useTheme, useVideo } from "contexts/contexts";
import { Link } from "react-router-dom";
import {
  MdMoreVert,
  MdPlaylistPlay,
  MdWatchLater,
  MdOutlineWatchLater,
} from "react-icons/md";
import { IoHeartSharp, IoHeartOutline } from "react-icons/io5";
import "styles/videolisting.css";

export default function VideoCard({ video }) {
  const { theme } = useTheme();
  const [showOptions, setShowOptions] = useState(false);

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

  return (
    <div>
      <div
        className={theme === "light" ? "video-card" : "video-card dark"}
        key={id}
      >
        <Link to={`/video/${video.videoId}`}>
          <img src={url} alt={title} className="video-thumbnail" />
        </Link>
        <div className="video-details">
          <img src={creatorImg} className="creator-dp" />
          <div className="creator-text">
            <h3 className="video-title">{title}</h3>
            <p className="video-creator p-sm p-grey">{creator}</p>
            <p className="video-views p-sm p-grey">{views} views</p>
          </div>
          <div>
            <MdMoreVert
              className="more-options"
              onClick={() => setShowOptions((prev) => !prev)}
            />
            <div
              className={
                showOptions ? "options-dialog shadow" : "options-dialog hide"
              }
            >
              {inWatchList ? (
                <p
                  className="options p-sm"
                  onClick={() => removeFromWatchlist(video, videoDispatch)}
                >
                  <MdWatchLater /> Remove from Watch Later
                </p>
              ) : (
                <p
                  className="options p-sm"
                  onClick={() => addToWatchlist(video, videoDispatch)}
                >
                  <MdOutlineWatchLater />
                  Add to Watch Later
                </p>
              )}
              {inLikedList ? (
                <p
                  className="options p-sm"
                  onClick={() => removeFromLikedList(video, videoDispatch)}
                >
                  <IoHeartSharp /> Remove from Liked Videos
                </p>
              ) : (
                <p
                  className="options p-sm"
                  onClick={() => addToLikedList(video, videoDispatch)}
                >
                  <IoHeartOutline />
                  Add to Liked Videos
                </p>
              )}
              <p className="options p-sm">
                <MdPlaylistPlay />
                Add to Playlist
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
