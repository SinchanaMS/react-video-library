import PlaylistCard from "components/PlaylistCard";
import { useVideo } from "contexts/contexts";
import emptyPL from "assets/videotape.svg";

export default function Playlist() {
  const {
    videoData: { playlists },
  } = useVideo();

  return (
    <ul className="video-list">
      {playlists?.length === 0 ? (
        <div className="empty-page">
          <img src={emptyPL} alt="empty-page" />
        </div>
      ) : (
        playlists?.map((playlist) => (
          <PlaylistCard playlist={playlist} key={playlist._id} />
        ))
      )}
    </ul>
  );
}
