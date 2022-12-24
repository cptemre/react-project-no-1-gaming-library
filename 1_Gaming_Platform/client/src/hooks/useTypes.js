import { useState, useEffect } from "react";

const useTypes = (state, dispatch, path) => {



  // CONTINUE FROM HERE. STATE PLATFORM SET UP WORKS
  useEffect(() => {
    let types = [];
    let routePaths = [];
    for (let i = 0; i < state.list.length; i++) {
      for (let x = 0; x < state.list[i][path].length; x++) {
        types.push(state.list[i][path][x].toUpperCase());
      }
    }
    types = [...new Set(types)];
    console.log(types);
    dispatch({ type: path.toUpperCase(), payload: types });
    console.log(state.genres);
  }, [state.filteredTypeList, path]);

  // SET TYPES BY FILTERING IT WITH CURRENT SELECTED VALUE IN FILTERTYPE
  useEffect(() => {
    console.log(state[path]);
    dispatch({ type: "LINK", payload: state[path] });
    console.log(state.link);
  }, [state[path], path]);
};

export default useTypes;
