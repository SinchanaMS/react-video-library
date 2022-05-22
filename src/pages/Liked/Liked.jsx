import VideoCard from "components/VideoCard";
import { useVideo } from "contexts/contexts";
import empty from "assets/videotape.svg";

export default function Liked() {
  const {
    videoData: { likedList },
  } = useVideo();

  return (
    <div className="video-list">
      {likedList?.length === 0 ? (
        <div className="empty-page">
          <img src={empty} alt="empty-page" />
        </div>
      ) : (
        likedList?.map((video) => <VideoCard video={video} key={video._id} />)
      )}
    </div>
  );
}
