export function videoReducer(videoData, action) {
  switch (action.type) {
    case "ALL_CATEGORIES":
      return { ...videoData, categoryList: action.payload };
    case "ADD_TO_WATCHLIST":
      return { ...videoData, watchList: action.payload };
    case "REMOVE_FROM_WATCHLIST":
      return { ...videoData, watchList: action.payload };
    case "ADD_TO_LIKEDLIST":
      return { ...videoData, likedList: action.payload };
    case "REMOVE_FROM_LIKEDLIST":
      return { ...videoData, likedList: action.payload };
    case "ADD_TO_HISTORY":
      return { ...videoData, history: action.payload };
    case "DELETE_FROM_HISTORY":
      return { ...videoData, history: action.payload };
    case "CLEAR_HISTORY":
      return { ...videoData, history: action.payload };
    default:
      return videoData;
  }
}
