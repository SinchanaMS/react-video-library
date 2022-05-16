import CategoryList from "components/CategoryList";
import Sidebar from "components/Sidebar";
import VideoCard from "components/VideoCard";
import { useVideo, useTheme } from "contexts/contexts";
import "styles/videolisting.css";

export default function Explore() {
  const { theme } = useTheme();
  const { filteredVideos } = useVideo();

  return (
    <div className="main-content">
      <Sidebar />
      <div
        className={theme === "light" ? "explore-videos" : "explore-videos dark"}
      >
        <CategoryList />
        <div className={theme === "light" ? "video-list" : "video-list dark"}>
          {filteredVideos?.map((video) => (
            <VideoCard video={video} key={video._id} />
          ))}
        </div>
      </div>
    </div>
  );
}
