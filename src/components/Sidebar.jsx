import {
  MdHome,
  MdExplore,
  MdHistory,
  MdPlaylistPlay,
  MdThumbUp,
  MdWatchLater,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useTheme } from "contexts/ThemeContext";
import "styles/sidebar.css";

export default function Sidebar() {
  const { theme } = useTheme();
  return (
    <nav className={theme === "light" ? "sidebar" : "sidebar dark"}>
      <NavLink className="sidebar-links" to="/">
        <MdHome className="sidebar-icons" />
        <p className="sidebar-pages p-sm">Home</p>
      </NavLink>
      <NavLink className="sidebar-links" to="/explore">
        <MdExplore className="sidebar-icons" />
        <p className="sidebar-pages p-sm">Explore</p>
      </NavLink>
      <NavLink className="sidebar-links" to="/history">
        <MdHistory className="sidebar-icons" />
        <p className="sidebar-pages p-sm">History</p>
      </NavLink>
      <NavLink className="sidebar-links" to="/playlist">
        <MdPlaylistPlay className="sidebar-icons" />
        <p className="sidebar-pages p-sm">Playlist</p>
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
