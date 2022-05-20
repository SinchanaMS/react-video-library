import { useEffect } from "react";
import VideoCard from "components/VideoCard";
import { useAuth, useTheme, useVideo, usePlaylist } from "contexts/contexts";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { IoHeartSharp, IoHeartOutline } from "react-icons/io5";
import {
  MdWatchLater,
  MdOutlineWatchLater,
  MdPlaylistPlay,
} from "react-icons/md";
import "styles/video.css";
import "styles/videolisting.css";
import PlaylistModal from "components/PlaylistModal";

export default function VideoPage() {
  const { videoId } = useParams();
  const { theme } = useTheme();
  const { isLoggedIn } = useAuth();

  const {
    videoDispatch,
    filteredVideos,
    videoData: { watchList, likedList },
    helperFunctions: {
      addToWatchlist,
      removeFromWatchlist,
      addToLikedList,
      removeFromLikedList,
      addToHistory,
    },
  } = useVideo();

  const getVideo = (filteredVideos, videoId) => {
    return filteredVideos.find((video) => video.videoId === videoId);
  };

  const suggestedVideos = (filteredVideos, video) => {
    return filteredVideos.filter((vid) => vid.category === video.category);
  };

  const video = getVideo(filteredVideos, videoId);
  const suggestedList = suggestedVideos(filteredVideos, video);
  const inWatchList = watchList.some((item) => item._id === video._id);
  const inLikedList = likedList.some((item) => item._id === video._id);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, [video]);

  const { showPlaylistModal, setShowPlaylistModal } = usePlaylist();

  return (
    <div className={theme === "light" ? "player" : "dark player"}>
      <div
        className={
          theme === "light" ? "video-player shadow" : "video-player dark"
        }
      >
        <div>
          <ReactPlayer
            className="react-player-card"
            controls={true}
            width="var(--PLAYER-WIDTH)"
            height="var(--PLAYER-HEIGHT)"
            playing={true}
            onReady={isLoggedIn ? () => addToHistory(video, videoDispatch) : ""}
            url={`https://www.youtube.com/watch?v=${videoId}`}
          />
          <div className="video-text">
            <div className="video-details">
              <img src={video?.creatorImg} className="creator-dp" />
              <div className="creator-text">
                <h3 className="video-title">{video?.title}</h3>
                <p className="video-creator p-sm p-grey">{video?.creator}</p>
                <p className="video-views p-sm p-grey">{video?.views} views</p>
              </div>
            </div>
            <div className="player-ctas">
              {inWatchList ? (
                <MdWatchLater
                  className="player-options p-sm"
                  onClick={() => removeFromWatchlist(video, videoDispatch)}
                />
              ) : (
                <MdOutlineWatchLater
                  className="player-options p-sm"
                  onClick={() => addToWatchlist(video, videoDispatch)}
                />
              )}
              {inLikedList ? (
                <IoHeartSharp
                  className="player-options p-sm"
                  onClick={() => removeFromLikedList(video, videoDispatch)}
                />
              ) : (
                <IoHeartOutline
                  className="player-options p-sm"
                  onClick={() => addToLikedList(video, videoDispatch)}
                />
              )}
              <MdPlaylistPlay
                className="player-options p-sm"
                onClick={() => {
                  setShowPlaylistModal((prev) => !prev);
                }}
              />
            </div>
            {showPlaylistModal && (
              <PlaylistModal video={video} key={video._id} />
            )}
          </div>
        </div>
      </div>

      <div className="suggestions">
        <h3>View similar</h3>
        <ul className="videos">
          {suggestedList?.map((video) => (
            <li className="videocard" key={video?._id}>
              <VideoCard video={video} key={video?._id} />
            </li>
          ))}
        </ul>
      </div>

      <div className="suggestions">
        <h3>Watch more</h3>
        <ul className="videos">
          {filteredVideos?.map((video) => (
            <li className="videocard" key={video?._id}>
              <VideoCard video={video} key={video?._id} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
