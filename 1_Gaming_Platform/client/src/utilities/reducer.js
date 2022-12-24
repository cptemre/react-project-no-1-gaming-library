const reducer = (state, action) => {
  if (action.type === "GET_ALL") {
    return { ...state, list: action.payload };
  }
  if (action.type === "PLATFORMS") {
    return { ...state, platforms: action.payload };
  }
  if (action.type === "FILTERED_TYPE_LIST") {
    return { ...state, filteredTypeList: action.payload };
  }
  if (action.type === "FILTERED") {
    return { ...state, filtered: action.payload };
  }
  if (action.type === "URL") {
    return { ...state, url: action.payload };
  }
  if (action.type === "DOM_LENGTH") {
    return { ...state, domLength: action.payload };
  }
  if (action.type === "ID") {
    return { ...state, id: action.payload };
  }
  if (action.type === "SHOW") {
    return { ...state, show: action.payload };
  }
  if (action.type === "WIDTH") {
    return { ...state, width: action.payload };
  }
  if (action.type === "LINK") {
    return { ...state, link: action.payload };
  }
  return console.log("Something went wrong");
};

const defaultState = {
  types: [
    "FAVORITES",
    "GAMES",
    "PLATFORMS",
    // "SERVICES",
    "GENRES",
    "MODES",
    "ENGINES",
    "YEARS",
    "DEVELOPERS",
    "PUBLISHERS",
  ],
  search: [
    "FAVORITES",
    "GAMES",
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
  platforms: [

  ],
  genres: [],
  services: ["STEAM", "EPIC"],
  list: [],
  filteredTypeList: [],
  filtered: [],
  url: "",
  domLength: 0,
  id: 10,
  show: false,
  width: 0,
  link: []
};

export { reducer, defaultState };
