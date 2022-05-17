export function videoReducer(state, action) {
  switch (action.type) {
    case "ALL_CATEGORIES":
      return { ...state, categoryList: action.payload };
    case "ADD_TO_WATCHLIST":
      return { ...state, watchList: action.payload };
    case "REMOVE_FROM_WATCHLIST":
      return { ...state, watchList: action.payload };
    case "ADD_TO_LIKEDLIST":
      return { ...state, likedList: action.payload };
    case "REMOVE_FROM_LIKEDLIST":
      return { ...state, likedList: action.payload };
    case "ADD_TO_HISTORY":
      return { ...state, history: action.payload };
    case "DELETE_FROM_HISTORY":
      return { ...state, history: action.payload };
    case "CLEAR_HISTORY":
      return { ...state, history: action.payload };
    case "CREATE_PLAYLIST":
      return { ...state, playlists: action.payload };
    case "DELETE_PLAYLIST":
      return { ...state, playlists: action.payload };
    case "ADD_TO_PLAYLIST": {
      let updatedPlaylist = state.playlists.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return { ...state, playlists: updatedPlaylist };
    }
    case "DELETE_FROM_PLAYLIST":
      return state;
    default:
      return state;
  }
}
