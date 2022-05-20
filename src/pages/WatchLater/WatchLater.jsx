import VideoCard from "components/VideoCard";
import { useTheme, useVideo } from "contexts/contexts";
import "styles/videolisting.css";
import empty from "assets/emptyPL.svg";

export default function WatchLater() {
  const { theme } = useTheme();
  const {
    videoData: { watchList },
  } = useVideo();
  return (
    <div className={theme === "light" ? "video-list" : "video-list dark"}>
      {watchList.length === 0 ? (
        <div className="empty-page">
          <img src={empty} alt="empty-page" />
        </div>
      ) : (
        watchList.map((video) => <VideoCard video={video} key={video._id} />)
      )}
    </div>
  );
}
