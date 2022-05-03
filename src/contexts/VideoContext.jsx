import { createContext, useContext, useReducer } from "react";
import { videoReducer } from "../reducers/videoReducer";
import {
  addToWatchlist,
  removeFromWatchlist,
} from "../router/utils/HelperFunctions";

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const initialData = {
    watchList: [],
    likedList: [],
    history: [],
  };

  const [videoData, videoDispatch] = useReducer(videoReducer, initialData);
  console.log(videoData);

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
