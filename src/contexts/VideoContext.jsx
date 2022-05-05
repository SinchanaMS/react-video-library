import { createContext, useContext, useReducer } from "react";
import { videoReducer } from "../reducers/videoReducer";
import {
  addToWatchlist,
  removeFromWatchlist,
} from "../router/utils/HelperFunctions";

const VideoContext = createContext();
const initialData = {
  watchList: [],
  likedList: [],
  history: [],
};
const VideoProvider = ({ children }) => {
  const [videoData, videoDispatch] = useReducer(videoReducer, initialData);

  return (
    <VideoContext.Provider
      value={{
        videoData,
        videoDispatch,
        videoReducer,
        addToWatchlist,
        removeFromWatchlist,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
const useVideo = () => useContext(VideoContext);
export { VideoProvider, useVideo };
