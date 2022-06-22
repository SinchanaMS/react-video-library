import PlaylistCard from "components/PlaylistCard";
import { useVideo } from "contexts/contexts";
import emptyPL from "assets/videotape.svg";
import { compose, searchFor } from "utils/HelperFunctions";

export default function Playlist() {
  const { videoData } = useVideo();
  const filteredPlaylists = compose(videoData, searchFor)(videoData.playlists);

  return (
    <ul className="video-list">
      {filteredPlaylists?.length === 0 ? (
        <div className="empty-page">
          <img src={emptyPL} alt="empty-page" />
        </div>
      ) : (
        filteredPlaylists?.map((playlist) => (
          <PlaylistCard playlist={playlist} key={playlist._id} />
        ))
      )}
    </ul>
  );
}
