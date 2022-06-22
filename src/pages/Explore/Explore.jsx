import CategoryList from "components/CategoryList";
import VideoCard from "components/VideoCard";
import { useVideo } from "contexts/contexts";
import "styles/videolisting.css";
import empty from "assets/videotape.svg";

export default function Explore() {
  const { filteredVideos } = useVideo();

  return (
    <div className="main-content">
      <div className="explore-videos">
        <CategoryList />
        <div className="video-list">
          {filteredVideos?.length === 0 ? (
            <div className="empty-page">
              <img src={empty} alt="empty-page" />
              <p>No results found.</p>
            </div>
          ) : (
            filteredVideos?.map((video) => (
              <VideoCard video={video} key={video._id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
