export function videoReducer(videoData, action) {
  switch (action.type) {
    case "ADD_TO_WATCHLIST":
      return { ...videoData, watchList: action.payload };
    case "REMOVE_FROM_WATCHLIST":
      return { ...videoData, watchList: action.payload };
    case "ADD_TO_LIKEDLIST":
      return { ...videoData, likedList: action.payload };
    case "REMOVE_FROM_LIKEDLIST":
      return { ...videoData, likedList: action.payload };
    default:
      return videoData;
  }
}
