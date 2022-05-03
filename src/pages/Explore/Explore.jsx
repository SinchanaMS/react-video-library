import axios from "axios";
import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import VideoCard from "../../components/VideoCard";
import { useTheme } from "../../contexts/ThemeContext";
import "../../styles/videolisting.css";

export default function Explore() {
  const { theme } = useTheme();
  const [videoList, setVideoList] = useState([]);

  // the below line will be uncommented in the future, pleases ignore for now
  // const randomVideos => videoList.sort(() => Math.random() - 0.5));

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get("/api/videos");
        if (response.status === 200) {
          setVideoList(response.data.videos);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div className="main-content">
      <Sidebar />
      <div className={theme === "light" ? "video-list" : "video-list dark"}>
        {videoList.map((video) => (
          <VideoCard video={video} key={video._id} />
        ))}
      </div>
    </div>
  );
}
