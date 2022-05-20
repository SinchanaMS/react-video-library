import VideoCard from "components/VideoCard";
import { useTheme, useVideo } from "contexts/contexts";
import empty from "assets/emptyPL.svg";

export default function Liked() {
  const {
    videoData: { likedList },
  } = useVideo();
  const { theme } = useTheme();

  return (
    <div className={theme === "light" ? "video-list" : "video-list dark"}>
      {likedList.length === 0 ? (
        <div className="empty-page">
          <img src={empty} alt="empty-page" />
        </div>
      ) : (
        likedList.map((video) => <VideoCard video={video} key={video._id} />)
      )}
    </div>
  );
}
