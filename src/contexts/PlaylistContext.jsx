import { createContext, useContext, useState } from "react";

const PlaylistContext = createContext();

export const usePlaylist = () => useContext(PlaylistContext);

export const PlaylistProvider = ({ children }) => {
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const [playlist, setPlaylist] = useState({ title: "", description: "" });

  return (
    <PlaylistContext.Provider
      value={{ showPlaylistModal, setShowPlaylistModal, playlist, setPlaylist }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};
