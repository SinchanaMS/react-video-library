import PlaylistCard from "components/PlaylistCard";
import { useTheme, useVideo } from "contexts/contexts";

export default function Playlist() {
  const {
    videoData: { playlists },
  } = useVideo();
  const { theme } = useTheme();
  return (
    <ul className={theme === "light" ? "video-list" : "video-list dark"}>
      {playlists.map((playlist) => (
        <PlaylistCard playlist={playlist} key={playlist._id} />
      ))}
    </ul>
  );
}
