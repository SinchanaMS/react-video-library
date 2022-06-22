import VideoCard from "components/VideoCard";
import { useVideo } from "contexts/contexts";
import "styles/videolisting.css";
import { AiFillCloseCircle } from "react-icons/ai";
import empty from "assets/videotape.svg";
import { compose, searchFor } from "utils/HelperFunctions";

export default function History() {
  const userToken = localStorage.getItem("userToken");
  const {
    videoData,
    videoDispatch,
    helperFunctions: { clearHistory, deleteFromHistory },
  } = useVideo();
  const { history } = videoData;
  const filteredVideos = compose(videoData, searchFor)(history);
  return (
    <div className="history-list">
      <button
        onClick={() => clearHistory(userToken, videoDispatch)}
        className="clear-history"
      >
        Clear History
      </button>
      <div className="video-list">
        {filteredVideos.length === 0 ? (
          <div className="empty-page">
            <img src={empty} alt="empty-page" />
            <p>No results found.</p>
          </div>
        ) : (
          filteredVideos?.map((video) => (
            <div className="history-video" key={video._id}>
              <VideoCard video={video} key={video._id} />
              <AiFillCloseCircle
                className="delete-btn"
                onClick={() =>
                  deleteFromHistory(video, userToken, videoDispatch)
                }
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
