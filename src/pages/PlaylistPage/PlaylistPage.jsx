import VideoCard from "components/VideoCard";
import { useVideo } from "contexts/contexts";
import { useParams } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import empty from "assets/videotape.svg";

export default function PlaylistPage() {
  const userToken = localStorage.getItem("userToken");
  const { playlistId } = useParams();
  const {
    videoData: { playlists },
    helperFunctions: { deleteFromPlaylist },
    videoDispatch,
  } = useVideo();

  const findPlaylist = playlists.find(
    (playlist) => playlist._id === playlistId
  );

  return (
    <div className="video-list">
      {findPlaylist.length === 0 ? (
        <div className="empty-page">
          <img src={empty} alt="empty-page" />
        </div>
      ) : (
        findPlaylist?.videos?.map((video) => (
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
        ))
      )}
    </div>
  );
}
