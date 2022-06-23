export function videoReducer(state, action) {
  switch (action.type) {
    case "ALL_CATEGORIES":
      return { ...state, categoryList: action.payload };

    case "ADD_TO_WATCHLIST":
    case "REMOVE_FROM_WATCHLIST":
      return { ...state, watchList: action.payload };

    case "ADD_TO_LIKEDLIST":
    case "REMOVE_FROM_LIKEDLIST":
      return { ...state, likedList: action.payload };

    case "ADD_TO_HISTORY":
    case "DELETE_FROM_HISTORY":
    case "CLEAR_HISTORY":
      return { ...state, history: action.payload.reverse() };

    case "CREATE_PLAYLIST":
    case "DELETE_PLAYLIST":
      return { ...state, playlists: action.payload };

    case "ADD_TO_PLAYLIST":
    case "DELETE_FROM_PLAYLIST": {
      const updatedPlaylist = state.playlists.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return { ...state, playlists: updatedPlaylist };
    }
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "SORT_BY":
      return { ...state, sortBy: action.payload };
    case "SEARCH_FOR":
      return { ...state, searchFor: action.payload };
    default:
      return state;
  }
}
