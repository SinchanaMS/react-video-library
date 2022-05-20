import VideoCard from "components/VideoCard";
import { useTheme, useVideo } from "contexts/contexts";
import { useParams } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import empty from "assets/emptyPL.svg";

export default function PlaylistPage() {
  const { playlistId } = useParams();
  const {
    videoData: { playlists },
    helperFunctions: { deleteFromPlaylist },
    videoDispatch,
  } = useVideo();
  const { theme } = useTheme();

  const findPlaylist = playlists.find(
    (playlist) => playlist._id === playlistId
  );

  return (
    <div className={theme === "light" ? "video-list" : "video-list dark"}>
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
                deleteFromPlaylist(findPlaylist, video, videoDispatch)
              }
            />
          </div>
        ))
      )}
    </div>
  );
}
