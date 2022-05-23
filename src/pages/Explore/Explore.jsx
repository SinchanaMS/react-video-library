import CategoryList from "components/CategoryList";
import VideoCard from "components/VideoCard";
import { useVideo } from "contexts/contexts";
import "styles/videolisting.css";

export default function Explore() {
  const { filteredVideos } = useVideo();

  return (
    <div className="main-content">
      <div className="explore-videos">
        <CategoryList />
        <div className="video-list">
          {filteredVideos?.map((video) => (
            <VideoCard video={video} key={video._id} />
          ))}
        </div>
      </div>
    </div>
  );
}
