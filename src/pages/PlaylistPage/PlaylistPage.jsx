import VideoCard from "components/VideoCard";
import { useVideo } from "contexts/contexts";
import { useNavigate, useParams } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import empty from "assets/videotape.svg";
import { clearPlaylist, compose, searchFor } from "utils/HelperFunctions";

export default function PlaylistPage() {
  const userToken = localStorage.getItem("userToken");
  const navigate = useNavigate();
  const { playlistId } = useParams();
  const {
    videoData,
    helperFunctions: { deleteFromPlaylist },
    videoDispatch,
  } = useVideo();
  const { playlists } = videoData;
  const findPlaylist = playlists.find(
    (playlist) => playlist._id === playlistId
  );

  const filteredVideos = compose(videoData, searchFor)(findPlaylist?.videos);

  return (
    <div className="video-list">
      {filteredVideos?.length === 0 ? (
        <div className="empty-page">
          <img src={empty} alt="empty-page" />
          <p>No results found.</p>
        </div>
      ) : (
        <div className="flex-col">
          <button
            className="clear-all"
            onClick={() =>
              clearPlaylist(findPlaylist, userToken, videoDispatch, navigate)
            }
          >
            Clear Playlist
          </button>
          <div className="playlists-container">
            {filteredVideos?.map((video) => (
              <div className="playlist-videos" key={video._id}>
                <VideoCard video={video} key={video._id} />
                <AiFillCloseCircle
                  className="delete-video"
                  onClick={() =>
                    deleteFromPlaylist(
                      findPlaylist,
                      video,
                      userToken,
                      videoDispatch
                    )
                  }
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
