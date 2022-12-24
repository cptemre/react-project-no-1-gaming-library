import { useEffect } from "react";

const useTypes = (state, dispatch, path) => {
  // CONTINUE FROM HERE. STATE PLATFORM SET UP WORKS
  useEffect(() => {
    let types = [];
    let routePaths = [];
    for (let i = 0; i < state.list.length; i++) {
      for (let x = 0; x < state.list[i].platforms.length; x++) {
        types.push(state.list[i].platforms[x].toUpperCase());
      }
    }
    types = [...new Set(types)];
    console.log(types);
    dispatch({ type: path.toUpperCase(), payload: types });
  }, [state.list, path]);

  // SET TYPES BY FILTERING IT WITH CURRENT SELECTED VALUE IN FILTERTYPE
  useEffect(() => {
    dispatch({ type: "LINK", payload: state[path] });
    console.log(state.link);
  }, [state.platforms, path]);
};

export default useTypes;
