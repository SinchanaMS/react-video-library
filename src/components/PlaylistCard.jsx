import { useVideo } from "contexts/contexts";
import { Link } from "react-router-dom";
import emptyPlaylist from "assets/videotape.svg";
import { AiFillDelete } from "react-icons/ai";
import "styles/playlistcard.css";

export default function PlaylistCard({ playlist }) {
  const {
    helperFunctions: { deletePlaylist },
    videoDispatch,
  } = useVideo();

  return (
    <div>
      <div className="playlist-card" key={playlist._id}>
        <Link to={`/playlist/${playlist._id}`}>
          {playlist.videos.length > 0 ? (
            <img
              src={playlist?.videos[0]?.thumbnail.url}
              alt={playlist?.title}
              className="playlist-thumbnail"
            />
          ) : (
            <img
              src={emptyPlaylist}
              alt={playlist?.title}
              className="playlist-thumbnail"
            />
          )}
        </Link>
        <div className="playlist-details">
          <div>
            <h3 className="playlist-title">{playlist?.title}</h3>
            <p className="p-sm p-grey">videos: {playlist?.videos.length}</p>
          </div>
          <AiFillDelete
            className="delete-icon"
            onClick={() => deletePlaylist(playlist, videoDispatch)}
          />
        </div>
      </div>
    </div>
  );
}
