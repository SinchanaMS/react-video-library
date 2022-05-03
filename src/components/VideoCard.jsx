import { useState } from "react";
import { useTheme, useVideo } from "../contexts/contexts";
import { MdMoreVert, MdPlaylistPlay, MdWatchLater } from "react-icons/md";
import "../styles/videolisting.css";

export default function VideoCard({ video }) {
  const { theme } = useTheme();
  const [showOptions, setShowOptions] = useState(false);

  const {
    addToWatchlist,
    removeFromWatchlist,
    videoDispatch,
    videoData: { watchList },
  } = useVideo();

  const {
    id,
    thumbnail: { url },
    title,
    creatorImg,
    creator,
    views,
  } = video;

  return (
    <div>
      <div
        className={theme === "light" ? "video-card" : "video-card dark"}
        key={id}
      >
        <img src={url} alt={title} className="video-thumbnail" />
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
              {watchList.some((item) => item._id === video._id) ? (
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
                  <MdWatchLater />
                  Add to Watch Later
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