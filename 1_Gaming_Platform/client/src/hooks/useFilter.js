import { useEffect, useState } from "react";

const useFilter = (state, dispatch, paths) => {
  const [filterID, setFilterID] = useState(0);
  const [filteredTypeList, setFilteredTypeList] = useState([]);
  const [replacedURL, setReplacedURL] = useState("");
  const [subpath, setSubpath] = useState("");
  const [path, setPath] = useState("");
  // SET YOUR LIST AND FILTERID
  useEffect(() => {
    setFilteredTypeList(state.filteredTypeList);
    setFilterID(state.id);
  }, [state]);

  useEffect(() => {
    // PREPARE URL PART
    if (paths && paths[3]) {
      setReplacedURL(paths[3]);
      if (paths[4] && paths[6]) {
        setPath(paths[4]);
        setSubpath(paths[6]);
      }
    }
  }, [paths]);

  // SET SHOW AND FILTER
  useEffect(() => {
    // FILTER YOUR LIST TO STATE.FILTER
    const filter = filteredTypeList.filter((item, i) => i < filterID);
    dispatch({ type: "FILTERED", payload: filter });
    // SET URL IN DISPATCH
    dispatch({ type: "URL", payload: replacedURL });
    // SHOW LOAD MORE BUTTON IF IT IS A PROPER PAGE
    if (state.types.includes(replacedURL.toUpperCase()) && filter) {
      dispatch({ type: "SHOW", payload: true });
      if (replacedURL === "favorites" && !filteredTypeList) {
        dispatch({ type: "SHOW", payload: false });
      }
    } else {
      // CHECK IF THERE ARE SUBPATHS FOR FORTH LINK PATH
      if (
        path &&
        subpath &&
        typeof state[path] === "object" &&
        state[path].includes(subpath)
      ) {
        dispatch({ type: "SHOW", payload: true });
      } else {
        dispatch({ type: "SHOW", payload: false });
      }
    }
  }, [filterID, filteredTypeList, state.domLength, replacedURL, path, subpath]);
};

export default useFilter;
