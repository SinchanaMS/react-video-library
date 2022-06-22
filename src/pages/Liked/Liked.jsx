import VideoCard from "components/VideoCard";
import { useVideo } from "contexts/contexts";
import empty from "assets/videotape.svg";
import { compose, searchFor } from "utils/HelperFunctions";

export default function Liked() {
  const { videoData } = useVideo();
  const filteredVideos = compose(videoData, searchFor)(videoData.likedList);

  return (
    <div className="video-list">
      {filteredVideos?.length === 0 ? (
        <div className="empty-page">
          <img src={empty} alt="empty-page" />
        </div>
      ) : (
        filteredVideos?.map((video) => (
          <VideoCard video={video} key={video._id} />
        ))
      )}
    </div>
  );
}
