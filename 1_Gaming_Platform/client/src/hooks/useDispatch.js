import { useEffect, useState } from "react";
import $ from "jquery";

const useDispatch = (state, dispatch) => {
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    dispatch({ type: "ID", payload: 10 });
  }, []);

  // SET FILTERED TYPE LIST

  useEffect(() => {
    let filteredTypeList = [];
    const url = new RegExp(state.url, "gi");
    // ALL GAMES WITHOUT FILTER
    if (state.url === "games") {
      filteredTypeList = state.list;
    }
    // FILTER PLATFORMS
    else if (state.platforms.includes(state.url.toUpperCase())) {
      for (let i = 0; i < state.list.length; i++) {
        for (let y = 0; y < state.list[i]["platforms"].length; y++) {
          if (state.list[i]["platforms"][y].match(url)) {
            filteredTypeList.push(state.list[i]);
          }
        }
      }
    }
    // FILTER GENRES
    else if (state.genres.includes(state.url.toUpperCase())) {
      for (let i = 0; i < state.list.length; i++) {
        for (let y = 0; y < state.list[i]["platforms"].length; y++) {
          if (state.list[i]["platforms"][y].match(url)) {
            filteredTypeList.push(state.list[i]);
          }
        }
      }
    }
        
    dispatch({ type: "FILTERED_TYPE_LIST", payload: filteredTypeList });
  }, [state.list, state.url]);

  // FILTER THE LIST BY 10 ON PAGE LOAD
  useEffect(() => {
    setFilteredList(state.filtered);
  }, [state.filtered]);

  // SET DOM LENGTH TO STATE
  useEffect(() => {
    dispatch({ type: "DOM_LENGTH", payload: $(".gameDiv").length });
  }, [filteredList]);
};

export default useDispatch;
