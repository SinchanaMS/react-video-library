import axios from "axios";
import Toast from "components/Toast";
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
    Toast({
      type: "error",
      message: "Oops! An error occurred.Try again later.",
    });
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
      Toast({ type: "success", message: "Added to Watch Later" });
    }
  } catch (error) {
    Toast({
      type: "error",
      message: "Oops! An error occurred.Try again later.",
    });
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
      Toast({ type: "info", message: "Removed from Watch Later" });
    }
  } catch (error) {
    Toast({
      type: "error",
      message: "Oops! An error occurred.Try again later.",
    });
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
      Toast({ type: "success", message: "Added to Liked Videos" });
    }
  } catch (error) {
    Toast({
      type: "error",
      message: "Oops! An error occurred.Try again later.",
    });
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
      Toast({ type: "info", message: "Removed from Liked Videos" });
    }
  } catch (error) {
    Toast({
      type: "error",
      message: "Oops! An error occurred.Try again later.",
    });
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
    Toast({
      type: "error",
      message: "Oops! An error occurred.Try again later.",
    });
    console.log(error.message);
  }
};

export const deleteFromHistory = async (video, videoDispatch) => {
  try {
    const response = await axios.delete(`/api/user/historys/${video._id}`, {
      headers: {
        authorization: userToken,
      },
    });
    if (response.status === 200) {
      videoDispatch({
        type: "DELETE_FROM_HISTORY",
        payload: response.data.history,
      });
      Toast({ type: "success", message: "Deleted from History" });
    }
  } catch (error) {
    Toast({
      type: "error",
      message: "Oops! An error occurred.Try again later.",
    });
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
      Toast({ type: "success", message: "Cleared History" });
    }
  } catch (error) {
    Toast({
      type: "error",
      message: "Oops! An error occurred.Try again later.",
    });
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
};
