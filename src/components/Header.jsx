import {
  MdSearch,
  MdPlayArrow,
  MdNightlightRound,
  MdWbSunny,
  MdMenu,
} from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { useAuth, useTheme } from "contexts/contexts";
import "styles/header.css";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const { isLoggedIn, logoutHandler } = useAuth();
  const location = useLocation();

  return (
    <div className={theme === "light" ? "header" : "header dark"}>
      <div className="main-logo">
        <div className="side-nav">
          <MdMenu className="menu" />
        </div>
        <MdPlayArrow className="brand-logo" />
        <Link to="/" className="p-lg brandname">
          brandName
        </Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" className="search-input" />
        <MdSearch className="search-icon" />
      </div>
      <div className="header-ctas">
        {isLoggedIn ? (
          <div className="header-ctas">
            <Link
              to="/"
              onClick={() => logoutHandler()}
              className="header-ctas"
            >
              Logout
            </Link>
          </div>
        ) : (
          <div className="header-ctas">
            <Link
              to="/login"
              className="header-ctas"
              state={{ from: location }}
            >
              Login
            </Link>
            <Link to="/signup" className="header-ctas">
              Sign Up
            </Link>
          </div>
        )}
        {theme === "dark" ? (
          <MdWbSunny onClick={() => setTheme("light")} className="theme-icon" />
        ) : (
          <MdNightlightRound
            onClick={() => setTheme("dark")}
            className="theme-icon"
          />
        )}
      </div>
    </div>
  );
}
