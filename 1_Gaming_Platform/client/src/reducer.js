const reducer = (state, action) => {
  if (action.type === "GET_ALL") {
    return { ...state, list: action.payload };
  }
  if (action.type === "FILTERED") {
    return { ...state, filtered: action.payload };
  }
  return console.log("Something went wrong");
};

const defaultState = {
  types: [
    "FAVORITES",
    "GAMES",
    "PLATFORMS",
    "GENRES",
    "MODES",
    "MICROSOFT WINDOWS",
    "STEAM",
    "EPIC",
    "XBOX ONE",
    "XBOX SERIES S",
    "XBOX SERIES X",
    "PLAYSTATION 4",
    "PLAYSTATION 5",
    "NINTENDO",
    "LINUX",
    "MACOS",
    "ENGINES",
    "YEARS",
    "DEVELOPERS",
    "PUBLISHERS",
  ],
  list: [],
  filtered: []
};

export { reducer, defaultState };
