import axios from "axios";
import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import {
  categories,
  compose,
  filterByCategory,
  helperFunctions,
  searchFor,
  sortBy,
} from "utils/HelperFunctions";
import { videoReducer } from "reducers/videoReducer";

const VideoContext = createContext();

const initialData = {
  watchList: [],
  likedList: [],
  history: [],
  categoryList: [],
  playlists: [],
  category: "All",
  sortBy: "",
  searchFor: "",
};

const VideoProvider = ({ children }) => {
  const [videoData, videoDispatch] = useReducer(videoReducer, initialData);
  const [allVideos, setAllVideos] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/videos");
        if (response.status === 200) {
          setAllVideos(response.data.videos);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideos();
  }, []);

  useEffect(() => {
    categories(videoDispatch);
  }, []);

  const filteredVideos = compose(
    videoData,
    filterByCategory,
    sortBy,
    searchFor
  )(allVideos);

  return (
    <VideoContext.Provider
      value={{
        videoData,
        allVideos,
        showOptions,
        helperFunctions,
        filteredVideos,
        loading,
        setLoading,
        videoDispatch,
        setShowOptions,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
const useVideo = () => useContext(VideoContext);
export { VideoProvider, useVideo };
