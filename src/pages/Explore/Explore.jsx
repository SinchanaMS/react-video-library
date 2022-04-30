import axios from "axios";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { useTheme } from "../../contexts/ThemeContext";
import "../../styles/videolisting.css";

export default function Explore() {
  const { theme } = useTheme();
  const [videoList, setVideoList] = useState([]);

  const videos = async () => {
    const response = await axios.get("/api/videos");
    try {
      if (response.status === 200) {
        setVideoList(response.data.videos);
      }
    } catch (error) {
      console.log(error);
    }
  };

  videos();
  return (
    <div className="main-content">
      <Sidebar />
      <div className={theme === "light" ? "video-list" : "video-list dark"}>
        {videoList.map(
          ({ id, thumbnail: { url }, title, creatorImg, creator, views }) => (
            <div
              className={theme === "light" ? "video-card" : "video-card dark"}
              key={id}
            >
              <img src={url} alt={title} className="video-thumbnail" />
              <div className="video-details">
                <img src={creatorImg} className="creator-dp" />
                <div className="creator-text">
                  <h3 className="video-title">{title}</h3>
                  <p className="video-creator p-sm p-grey">{creator}</p>
                  <p className="video-views p-sm p-grey">{views} views</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
