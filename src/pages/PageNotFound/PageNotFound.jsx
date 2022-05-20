import errorLight from "assets/errorLight.gif";
import errorDark from "assets/errorDark.gif";
import { useTheme } from "contexts/contexts";

export default function PageNotFound() {
  const { theme } = useTheme();
  return (
    <div
      className={
        theme === "light" ? "error video-list" : "error video-list dark"
      }
    >
      <div className="error-page">
        {theme === "light" ? (
          <img src={errorLight} alt="notFound" />
        ) : (
          <img src={errorDark} alt="notFound" />
        )}
      </div>
    </div>
  );
}
