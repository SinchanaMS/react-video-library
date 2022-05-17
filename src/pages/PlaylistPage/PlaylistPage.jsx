import VideoCard from "components/VideoCard";
import { useTheme, useVideo } from "contexts/contexts";
import { useParams } from "react-router-dom";

export default function PlaylistPage() {
  const { playlistId } = useParams();
  const {
    videoData: { playlists },
  } = useVideo();
  const { theme } = useTheme();

  const findPlaylist = playlists.find(
    (playlist) => playlist._id === playlistId
  );

  return (
    <div className={theme === "light" ? "video-list" : "video-list dark"}>
      {findPlaylist.videos.map((video) => (
        <VideoCard video={video} key={video._id} />
      ))}
    </div>
  );
}
