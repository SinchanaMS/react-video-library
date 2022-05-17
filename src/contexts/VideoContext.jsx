import axios from "axios";
import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { videoReducer } from "reducers/videoReducer";
import { categories, helperFunctions } from "router/utils/HelperFunctions";

const VideoContext = createContext();

const initialData = {
  watchList: [],
  likedList: [],
  history: [],
  categoryList: [],
  playlists: [],
};

const VideoProvider = ({ children }) => {
  const [videoData, videoDispatch] = useReducer(videoReducer, initialData);
  const [allVideos, setAllVideos] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [filteredVideos, setFilteredVideos] = useState(allVideos);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get("/api/videos");
        if (response.status === 200) {
          setAllVideos(response.data.videos);
          setFilteredVideos(response.data.videos);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideos();
  }, []);

  useEffect(() => {
    categories(videoDispatch);
  }, []);

  const randomVideos = (allVideos) => {
    allVideos.sort(() => Math.random() - 0.5);
  };
  useEffect(() => {
    randomVideos(allVideos);
  }, [filteredVideos]);

  const filterByCategory = (category, allVideos) => {
    return category === "All"
      ? setFilteredVideos(allVideos)
      : setFilteredVideos(
          allVideos.filter((video) => video.category === category)
        );
  };

  return (
    <VideoContext.Provider
      value={{
        videoData,
        allVideos,
        showOptions,
        helperFunctions,
        filteredVideos,
        videoDispatch,
        setShowOptions,
        filterByCategory,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
const useVideo = () => useContext(VideoContext);
export { VideoProvider, useVideo };
