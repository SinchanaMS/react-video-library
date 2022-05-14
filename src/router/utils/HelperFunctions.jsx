import axios from "axios";
import Toast from "components/Toast";
const userToken = localStorage.getItem("userToken");

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
    console.log(error);
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
    console.log(error);
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
    console.log(error);
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
    console.log(error);
  }
};
