import VideoCard from "components/VideoCard";
import { useVideo } from "contexts/contexts";
import "styles/videolisting.css";
import empty from "assets/videotape.svg";

export default function WatchLater() {
  const {
    videoData: { watchList },
  } = useVideo();
  return (
    <div className="video-list">
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
