import PlaylistCard from "components/PlaylistCard";
import { useTheme, useVideo } from "contexts/contexts";
import empty from "assets/emptyPL.svg";

export default function Playlist() {
  const {
    videoData: { playlists },
  } = useVideo();
  const { theme } = useTheme();
  return (
    <ul className={theme === "light" ? "video-list" : "video-list dark"}>
      {playlists?.length === 0 ? (
        <div className="empty-page">
          <img src={empty} alt="empty-page" />
        </div>
      ) : (
        playlists?.map((playlist) => (
          <PlaylistCard playlist={playlist} key={playlist._id} />
        ))
      )}
    </ul>
  );
}
