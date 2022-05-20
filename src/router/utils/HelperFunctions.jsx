import axios from "axios";
import toast from "react-hot-toast";
const userToken = localStorage.getItem("userToken");

export const categories = async (videoDispatch) => {
  try {
    const response = await axios.get("/api/categories");
    if (response.status === 200) {
      videoDispatch({
        type: "ALL_CATEGORIES",
        payload: response.data.categories,
      });
    }
  } catch (error) {
    toast.error("Oops! An error occurred.Try again later.");
    console.log(error.message);
  }
};

export const addToWatchlist = async (video, videoDispatch) => {
  try {
    const response = await axios.post(
      "/api/user/watchlater",
      { video },
      {
        headers: {
          authorization: userToken,
        },
      }
    );
    if (response.status === 201) {
      videoDispatch({
        type: "ADD_TO_WATCHLIST",
        payload: response.data.watchlater,
      });
      toast.success("Added to Watchlist");
    }
  } catch (error) {
    toast.error("Oops! An error occurred.Try again later.");
    console.log(error.message);
  }
};

export const removeFromWatchlist = async (video, videoDispatch) => {
  try {
    const response = await axios.delete(`/api/user/watchlater/${video._id}`, {
      headers: {
        authorization: userToken,
      },
    });
    if (response.status === 200) {
      videoDispatch({
        type: "REMOVE_FROM_WATCHLIST",
        payload: response.data.watchlater,
      });
      toast.success("Removed from Watchlist");
    }
  } catch (error) {
    toast.error("Oops! An error occurred.Try again later.");
    console.log(error.message);
  }
};

export const addToLikedList = async (video, videoDispatch) => {
  try {
    const response = await axios.post(
      "/api/user/likes",
      { video },
      {
        headers: {
          authorization: userToken,
        },
      }
    );
    if (response.status === 201) {
      videoDispatch({ type: "ADD_TO_LIKEDLIST", payload: response.data.likes });
      toast.success("Added to Liked Videos");
    }
  } catch (error) {
    toast.error("Oops! An error occurred.Try again later.");
    console.log(error.message);
  }
};

export const removeFromLikedList = async (video, videoDispatch) => {
  try {
    const response = await axios.delete(`/api/user/likes/${video._id}`, {
      headers: {
        authorization: userToken,
      },
    });
    if (response.status === 200) {
      videoDispatch({
        type: "REMOVE_FROM_LIKEDLIST",
        payload: response.data.likes,
      });
      toast.success("Removed from Liked Videos");
    }
  } catch (error) {
    toast.error("Oops! An error occurred.Try again later.");
    console.log(error.message);
  }
};

export const addToHistory = async (video, videoDispatch) => {
  try {
    const response = await axios.post(
      "/api/user/history",
      { video },
      {
        headers: {
          authorization: userToken,
        },
      }
    );
    if (response.status === 201) {
      videoDispatch({ type: "ADD_TO_HISTORY", payload: response.data.history });
    }
  } catch (error) {
    if (error.response.status === 409) {
      console.log(error.message);
    } else toast.error("Oops! An error occurred.Try again later.");
    console.log(error.message);
  }
};

export const deleteFromHistory = async (video, videoDispatch) => {
  try {
    const response = await axios.delete(`/api/user/history/${video._id}`, {
      headers: {
        authorization: userToken,
      },
    });
    if (response.status === 200) {
      videoDispatch({
        type: "DELETE_FROM_HISTORY",
        payload: response.data.history,
      });
      toast.success("Deleted from History");
    }
  } catch (error) {
    toast.error("Oops! An error occurred.Try again later.");
    console.log(error.message);
  }
};

export const clearHistory = async (videoDispatch) => {
  try {
    const response = await axios.delete("/api/user/history/all", {
      headers: {
        authorization: userToken,
      },
    });
    if (response.status === 200) {
      videoDispatch({
        type: "CLEAR_HISTORY",
        payload: response.data.history,
      });
      toast.success("Cleared History");
    }
  } catch (error) {
    toast.error("Oops! An error occurred.Try again later.");
    console.log(error.message);
  }
};

export const createPlaylist = async (
  title = "",
  description = "",
  videoDispatch,
  setPlaylist
) => {
  try {
    const response = await axios.post(
      "/api/user/playlists",
      {
        playlist: { title: title, description: description },
      },
      {
        headers: {
          authorization: userToken,
        },
      }
    );
    if (response.status === 201) {
      videoDispatch({
        type: "CREATE_PLAYLIST",
        payload: response.data.playlists,
      });
      setPlaylist({ title: "", description: "" });
      toast.success("Created the playlist");
    }
  } catch (error) {
    toast.error("Oops! An error occurred.Try again later.");
    console.log(error.message);
  }
};

export const deletePlaylist = async (playlist, videoDispatch) => {
  try {
    const response = await axios.delete(`/api/user/playlists/${playlist._id}`, {
      headers: {
        authorization: userToken,
      },
    });
    if (response.status === 200) {
      videoDispatch({
        type: "DELETE_PLAYLIST",
        payload: response.data.playlists,
      });
      toast.success("Deleted the playlist");
    }
  } catch (error) {
    toast.error("Oops! An error occurred.Try again later.");
    console.log(error.message);
  }
};

export const addToPlaylist = async (playlistID, video, videoDispatch) => {
  try {
    const response = await axios.post(
      `/api/user/playlists/${playlistID}`,
      { video },
      {
        headers: {
          authorization: userToken,
        },
      }
    );
    if (response.status === 409) {
      toast.error("Video already exists in the playlist");
    }
    if (response.status === 201 || response.status === 200) {
      videoDispatch({
        type: "ADD_TO_PLAYLIST",
        payload: response.data.playlist,
      });
      toast.success("Added to playlist");
    }
  } catch (error) {
    if (error.response.status === 409) {
      toast.error("Video already exists in the playlist");
    } else {
      toast.error("Oops! An error occurred.Try again later.");
      console.log(error.message);
    }
  }
};

export const deleteFromPlaylist = async (playlist, video, videoDispatch) => {
  try {
    const response = await axios.delete(
      `/api/user/playlists/${playlist._id}/${video._id}`,
      {
        headers: {
          authorization: userToken,
        },
      }
    );
    if (response.status === 200) {
      videoDispatch({
        type: "DELETE_FROM_PLAYLIST",
        payload: response.data.playlist,
      });
      toast.success("Deleted from playlist");
    }
  } catch (error) {
    toast.error("Oops! An error occurred.Try again later.");
    console.log(error.message);
  }
};

export const helperFunctions = {
  addToWatchlist,
  removeFromWatchlist,
  addToLikedList,
  removeFromLikedList,
  addToHistory,
  deleteFromHistory,
  clearHistory,
  categories,
  createPlaylist,
  deletePlaylist,
  addToPlaylist,
  deleteFromPlaylist,
};
