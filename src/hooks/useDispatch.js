import { useEffect, useState } from "react";

const useDispatch = (state, dispatch, length) => {
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    dispatch({ type: "ID", payload: 10 });
  }, []);

  // SET FILTERED TYPE LIST

  useEffect(() => {
    let filteredTypeList = [];
    const url = new RegExp(state.url, "gi");

    // PREPARE TYPE URL PART
    const fullURL = document.URL.split("/");
    const typeURL = fullURL[3];
    // ALL GAMES WITHOUT FILTER
    if (typeURL === "games") {
      filteredTypeList = state.list;
    } else if (typeURL === "favorites") {
      filteredTypeList = state.favorites;
    } else if (!fullURL[4]) {
      filteredTypeList = state[typeURL];
    }
    // FILTER TYPES
    else if (state[typeURL].includes(state.url.toUpperCase())) {
      for (let i = 0; i < state.list.length; i++) {
        if (state.list[i][typeURL]) {
          for (let y = 0; y < state.list[i][typeURL].length; y++) {
            if (state.list[i][typeURL][y].match(url)) {
              filteredTypeList.push(state.list[i]);
            }
          }
        }
      }
    }
    dispatch({ type: "FILTERED_TYPE_LIST", payload: filteredTypeList });
  }, [state.list, state.url, state.types]);

  // FILTER THE LIST BY 10 ON PAGE LOAD
  useEffect(() => {
    setFilteredList(state.filtered);
  }, [state.filtered]);

  // SET DOM LENGTH TO STATE
  useEffect(() => {
    dispatch({ type: "DOM_LENGTH", payload: length });
  }, [filteredList]);
};

export default useDispatch;
