import { useEffect, useState } from "react";

const useFilter = (state, dispatch) => {
  const [filterID, setFilterID] = useState(0);
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(state.list);
    setFilterID(state.id);
  }, [state]);

  useEffect(() => {
    const url = document.URL.split("/");
    const lastURL = url[url.length - 1];
    // FILTER YOUR LIST TO STATE.FILTER
    const filter = list.filter((item) => item.id < filterID);
    dispatch({ type: "FILTERED", payload: filter });
    // SET URL IN DISPATCH
    dispatch({ type: "URL", payload: lastURL });
    if (
      state.types.includes(lastURL.toUpperCase()) &&
      lastURL.toUpperCase() !== "PLATFORMS"
    ) {
      dispatch({ type: "SHOW", payload: true });
    } else {
      dispatch({ type: "SHOW", payload: false });
    }
    console.log(state.show);
  }, [filterID, list]);
};

export default useFilter;
