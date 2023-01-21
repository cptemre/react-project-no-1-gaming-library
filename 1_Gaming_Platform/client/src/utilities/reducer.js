const reducer = (state, action) => {
  if (action.type === "GET_ALL") {
    return { ...state, list: action.payload };
  }
  if (action.type === "FAVORITES") {
    let fav;
    if (state.favorites.includes(action.payload)) {
      fav = state.favorites.filter((favs) => favs !== action.payload);
    } else {
      fav = [...state.favorites, action.payload];
    }
    return { ...state, favorites: fav };
  }
  if (action.type === "PLATFORMS") {
    return { ...state, platforms: action.payload };
  }
  if (action.type === "SERVICES") {
    return { ...state, services: action.payload };
  }
  if (action.type === "GENRES") {
    return { ...state, genres: action.payload };
  }
  if (action.type === "MODES") {
    return { ...state, modes: action.payload };
  }
  if (action.type === "ENGINES") {
    return { ...state, engines: action.payload };
  }
  if (action.type === "YEARS") {
    return { ...state, years: action.payload };
  }
  if (action.type === "DEVELOPERS") {
    return { ...state, developers: action.payload };
  }
  if (action.type === "PUBLISHERS") {
    return { ...state, publishers: action.payload };
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

  return console.log("Something went wrong");
};

const defaultState = {
  types: [
    "FAVORITES",
    "GAMES",
    "PLATFORMS",
    "SERVICES",
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
  favorites: [],
  platforms: [
    "AMAZON LUNA",
    "IPADOS",
    "LINUX",
    "MACOS",
    "MICROSOFT WINDOWS",
    "NINTENDO SWITCH",
    "PLAYSTATION 4",
    "PLAYSTATION 5",
    "STADIA",
    "XBOX ONE",
    "XBOX SERIES S",
    "XBOX SERIES X",
  ],
  services: ["STEAM", "EPIC", "BATTLE.NET"],
  genres: [
    "ACTION",
    "ADVENTURE",
    "BATTLE ROYALE",
    "CITY-BUILDING",
    "FIGHTING",
    "FIRST-PERSON SHOOTER",
    "GRAND STRATEGY",
    "HACK AND SLASH",
    "HORROR",
    "METROIDVANIA",
    "MMO",
    "PLATFORM-ADVENTURE",
    "REAL-TIME STRATEGY",
    "ROGUELIKE",
    "ROLE-PLAYING",
    "RUN AND GUN",
    "STEALTH",
    "STRATEGY",
    "SURVIVAL",
  ],
  modes: ["SINGLE-PLAYER", "MULTIPLAYER"],
  engines: [
    "CLAUSEWITZ ENGINE",
    "CREATION ENGINE",
    "CRYENGINE",
    "DECIMA",
    "IW 8.0",
    "LITHTECH FIREBIRD",
    "RE ENGINE",
    "REDENGINE 3",
    "REDENGINE 4",
    "UBISOFT ANVIL",
    "UNITY",
    "UNREAL ENGINE 3",
    "UNREAL ENGINE 4",
  ],
  years: [
    "2004",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
  ],
  developers: [
    "ASOBO STUDIO",
    "BATTLESTATE GAMES",
    "BETHESDA GAME STUDIOS",
    "BLIZZARD ENTERTAINMENT",
    "BLUE BYTE",
    "BLUETWELVE STUDIO",
    "CAPCOM",
    "CD PROJEKT RED",
    "GUERRILLA GAMES",
    "HELLO GAMES",
    "INFINITY WARD",
    "IO INTERACTIVE",
    "KOJIMA PRODUCTIONS",
    "MONOLITH PRODUCTIONS",
    "MOON STUDIOS",
    "NETHERREALM STUDIOS",
    "OBSIDIAN ENTERTAINMENT",
    "PARADOX DEVELOPMENT STUDIO",
    "RAVEN SOFTWARE",
    "RESPAWN ENTERTAINMENT",
    "ROCKSTEADY STUDIOS",
    "SANTA MONICA STUDIO",
    "STUDIO MDHR",
    "SUPERGIANT GAMES",
    "TALEWORLDS ENTERTAINMENT",
    "TEAM CHERRY",
    "TECHLAND",
    "UBISOFT MONTREAL",
    "WARHORSE STUDIOS",
    "ZA-UM",
    "ZENIMAX ONLINE STUDIOS",
  ],
  publishers: [
    "ACTIVISION",
    "ANNAPURNA INTERACTIVE",
    "BATTLESTATE GAMES",
    "BETHESDA SOFTWORKS",
    "BLIZZARD ENTERTAINMENT",
    "CAPCOM",
    "CD PROJEKT",
    "DEEP SILVER",
    "ELECTRONIC ARTS",
    "FOCUS HOME INTERACTIVE",
    "HELLO GAMES",
    "IAM8BIT",
    "INTERACTIVE ENTERTAINMENT",
    "PARADOX INTERACTIVE",
    "PRIVATE DIVISION",
    "SONY INTERACTIVE ENTERTAINMENT",
    "SQUARE ENIX",
    "STUDIO MDHR",
    "SUPERGIANT GAMES",
    "TALEWORLDS ENTERTAINMENT PRIME MATTER",
    "TEAM CHERRY",
    "TECHLAND",
    "UBISOFT",
    "WARNER BROS",
    "XBOX GAME STUDIOS",
    "ZA-UM",
  ],
  list: [],
  filteredTypeList: [],
  filtered: [],
  url: "",
  domLength: 0,
  id: 10,
  show: false,
  width: 0,
};

export { reducer, defaultState };
