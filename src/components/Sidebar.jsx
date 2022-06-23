import {
  MdExplore,
  MdHistory,
  MdPlaylistPlay,
  MdThumbUp,
  MdWatchLater,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import "styles/sidebar.css";

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <NavLink className="sidebar-links" to="/">
        <MdExplore className="sidebar-icons" />
        <p className="sidebar-pages p-sm">Explore</p>
      </NavLink>
      <NavLink className="sidebar-links" to="/history">
        <MdHistory className="sidebar-icons" />
        <p className="sidebar-pages p-sm">History</p>
      </NavLink>
      <NavLink className="sidebar-links" to="/playlists">
        <MdPlaylistPlay className="sidebar-icons" />
        <p className="sidebar-pages p-sm">Playlists</p>
      </NavLink>
      <NavLink className="sidebar-links" to="/liked">
        <MdThumbUp className="sidebar-icons" />
        <p className="sidebar-pages p-sm">Liked Videos</p>
      </NavLink>
      <NavLink className="sidebar-links" to="/watchlater">
        <MdWatchLater className="sidebar-icons" />
        <p className="sidebar-pages p-sm">Watch Later</p>
      </NavLink>
    </nav>
  );
}
