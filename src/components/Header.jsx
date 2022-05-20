import { MdNightlightRound, MdWbSunny } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { useAuth, useTheme, useVideo } from "contexts/contexts";
import "styles/header.css";
import { useState } from "react";
import logo from "assets/logo.png";

export default function Header() {
  const { videoDispatch } = useVideo();
  const { theme, setTheme } = useTheme();
  const { isLoggedIn, logoutHandler } = useAuth();
  const location = useLocation();
  const [showUserDialog, setShowUserDialog] = useState(false);
  return (
    <div className={theme === "light" ? "header" : "header dark"}>
      <div className="main-logo">
        <img src={logo} alt="brand-logo" className="brand-logo" />
        <Link to="/" className="p-lg brandname">
          Percipio
        </Link>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          onChange={(e) =>
            videoDispatch({ type: "SEARCH_FOR", payload: e.target.value })
          }
        />
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

      <div className="user-dialog">
        <AiOutlineUser
          className="user-icon"
          onClick={() => setShowUserDialog((prev) => !prev)}
        />
        {showUserDialog && (
          <div className="user-options">
            <div className="user-options-ctas">
              {isLoggedIn ? (
                <div className="user-options-ctas">
                  <Link
                    to="/"
                    onClick={() => logoutHandler()}
                    className="user-options-ctas"
                  >
                    Logout
                  </Link>
                </div>
              ) : (
                <div className="user-options-ctas">
                  <Link
                    to="/login"
                    className="user-options-ctas"
                    state={{ from: location }}
                  >
                    Login
                  </Link>
                  <Link to="/signup" className="user-options-ctas">
                    Sign Up
                  </Link>
                </div>
              )}
              <p className="theme">
                Theme :
                {theme === "dark" ? (
                  <MdWbSunny
                    onClick={() => setTheme("light")}
                    className="theme-icon"
                  />
                ) : (
                  <MdNightlightRound
                    onClick={() => setTheme("dark")}
                    className="theme-icon"
                  />
                )}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
