import Sidebar from "components/Sidebar";
import VideoCard from "components/VideoCard";
import { useVideo } from "contexts/contexts";
import { useTheme } from "contexts/ThemeContext";
import "styles/videolisting.css";

export default function Explore() {
  const { theme } = useTheme();
  const { videoList } = useVideo();

  const randomVideos = videoList.sort(() => Math.random() - 0.5);

  return (
    <div className="main-content">
      <Sidebar />
      <div className={theme === "light" ? "video-list" : "video-list dark"}>
        {randomVideos.map((video) => (
          <VideoCard video={video} key={video._id} />
        ))}
      </div>
    </div>
  );
}
