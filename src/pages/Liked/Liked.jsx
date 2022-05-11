import VideoCard from "components/VideoCard";
import { useTheme, useVideo } from "contexts/contexts";

export default function Liked() {
  const {
    videoData: { likedList },
  } = useVideo();
  const { theme } = useTheme();

  return (
    <div className={theme === "light" ? "video-list" : "video-list dark"}>
      {likedList.map((video) => (
        <VideoCard video={video} key={video._id} />
      ))}
    </div>
  );
}
