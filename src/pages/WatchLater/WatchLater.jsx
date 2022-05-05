import VideoCard from "components/VideoCard";
import { useTheme, useVideo } from "contexts/contexts";
import "styles/videolisting.css";

export default function WatchLater() {
  const { theme } = useTheme();
  const {
    videoData: { watchList },
  } = useVideo();
  return (
    <div className={theme === "light" ? "video-list" : "video-list dark"}>
      {watchList.map((video) => (
        <VideoCard video={video} key={video._id} />
      ))}
    </div>
  );
}
