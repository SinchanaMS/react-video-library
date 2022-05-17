import React from "react";
import "styles/playlistmodal.css";
import { AiFillCloseCircle, AiFillPlusCircle } from "react-icons/ai";
import { addToPlaylist, createPlaylist } from "router/utils/HelperFunctions";
import { useVideo, useTheme } from "contexts/contexts";
import { usePlaylist } from "contexts/PlaylistContext";

export default function PlaylistModal({ video }) {
  const { playlist, setPlaylist, setShowPlaylistModal } = usePlaylist();
  const {
    videoDispatch,
    videoData: { playlists },
  } = useVideo();

  const { theme } = useTheme();

  return (
    <div
      className={theme === "light" ? "playlist-modal" : "playlist-modal dark"}
    >
      <div className="modal-bg"></div>
      <div className="modal">
        <h2 className="modal-title p-lg">
          My Playlists
          <AiFillCloseCircle
            className="close-modal"
            onClick={() => setShowPlaylistModal((prev) => !prev)}
          />
        </h2>

        <ul className="playlists">
          {playlists.map((playlist) => (
            <li
              key={playlist._id}
              onClick={() => addToPlaylist(playlist._id, video, videoDispatch)}
            >
              <label className="playlist">
                <AiFillPlusCircle />

                {playlist.title}
              </label>
            </li>
          ))}
        </ul>
        <div className="create-playlist">
          <input
            type="text"
            className="title"
            placeholder="Create Playlist"
            value={playlist.title}
            onChange={(e) =>
              setPlaylist((prev) => ({ ...prev, title: e.target.value }))
            }
          />
          <AiFillPlusCircle
            className="add-playlist"
            onClick={() =>
              createPlaylist(
                playlist.title,
                playlist.description,
                videoDispatch,
                setPlaylist
              )
            }
          />
        </div>
      </div>
    </div>
  );
}
