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
    <div className="header">
      <Link to="/">
        <div className="main-logo">
          <img src={logo} alt="brand-logo" className="brand-logo" />
          <p className="p-lg brandname">Percipio</p>
        </div>
      </Link>
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
        <p className="theme">
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
        <div className="user-dialog">
          <AiOutlineUser
            className={showUserDialog ? "user-icon active" : "user-icon"}
            onClick={() => setShowUserDialog((prev) => !prev)}
          />

          <div
            className={
              showUserDialog ? "user-options show" : "user-options hide"
            }
          >
            {isLoggedIn ? (
              <div className="user-options-ctas">
                <Link to="/profile" className="user-actions">
                  Profile
                </Link>

                <Link
                  to="/"
                  onClick={() => logoutHandler()}
                  className="user-actions"
                >
                  Logout
                </Link>
              </div>
            ) : (
              <div className="user-options-ctas">
                <Link
                  to="/login"
                  className="user-actions"
                  state={{ from: location }}
                >
                  Login
                </Link>
                <Link to="/signup" className="user-actions">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
