import {
  MdHome,
  MdExplore,
  MdHistory,
  MdPlaylistPlay,
  MdThumbUp,
  MdWatchLater,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { useTheme } from "contexts/ThemeContext";
import "styles/sidebar.css";

export default function Sidebar() {
  const { theme } = useTheme();
  return (
    <nav className={theme === "light" ? "sidebar" : "sidebar dark"}>
      <Link className="sidebar-links" to="/">
        <MdHome className="sidebar-icons" />
        Home
      </Link>
      <Link className="sidebar-links" to="/">
        <MdExplore className="sidebar-icons" />
        Explore
      </Link>
      <Link className="sidebar-links" to="/history">
        <MdHistory className="sidebar-icons" /> History
      </Link>
      <Link className="sidebar-links" to="/playlist">
        <MdPlaylistPlay className="sidebar-icons" /> Playlist
      </Link>
      <Link className="sidebar-links" to="/liked">
        <MdThumbUp className="sidebar-icons" />
        Liked Videos
      </Link>
      <Link className="sidebar-links" to="/watchlater">
        <MdWatchLater className="sidebar-icons" /> Watch Later
      </Link>
    </nav>
  );
}
