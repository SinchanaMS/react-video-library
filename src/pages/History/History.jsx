import VideoCard from "components/VideoCard";
import { useTheme, useVideo } from "contexts/contexts";
import "styles/videolisting.css";
import { AiFillCloseCircle } from "react-icons/ai";

export default function History() {
  const { theme } = useTheme();
  const {
    videoData,
    videoDispatch,
    helperFunctions: { clearHistory, deleteFromHistory },
  } = useVideo();
  const { history } = videoData;

  return (
    <div className={theme === "light" ? "history-list" : "history-list dark"}>
      <button
        onClick={() => clearHistory(videoDispatch)}
        className="clear-history"
      >
        Clear History
      </button>
      <div className={theme === "light" ? "video-list" : "video-list dark"}>
        {history.map((video) => (
          <div className="history-video" key={video._id}>
            <VideoCard video={video} key={video._id} />
            <AiFillCloseCircle
              className="delete-btn"
              onClick={() => deleteFromHistory(video, videoDispatch)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
