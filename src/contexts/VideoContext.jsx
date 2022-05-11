import axios from "axios";
import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { videoReducer } from "reducers/videoReducer";
import {
  addToWatchlist,
  removeFromWatchlist,
  addToLikedList,
  removeFromLikedList,
} from "router/utils/HelperFunctions";

const VideoContext = createContext();

const initialData = {
  watchList: [],
  likedList: [],
  history: [],
};

const VideoProvider = ({ children }) => {
  const [videoData, videoDispatch] = useReducer(videoReducer, initialData);
  const [videoList, setVideoList] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

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

  const randomVideos = videoList.sort(() => Math.random() - 0.5);

  return (
    <VideoContext.Provider
      value={{
        videoData,
        videoDispatch,
        videoReducer,
        addToWatchlist,
        removeFromWatchlist,
        addToLikedList,
        removeFromLikedList,
        videoList,
        setVideoList,
        showOptions,
        setShowOptions,
        randomVideos,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
const useVideo = () => useContext(VideoContext);
export { VideoProvider, useVideo };
