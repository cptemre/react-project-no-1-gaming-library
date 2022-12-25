import { useState, useEffect } from "react";

const useTypes = (state, dispatch, path) => {
  // CONTINUE FROM HERE. STATE PLATFORM SET UP WORKS
  useEffect(() => {
    let types = [];
    for (let i = 0; i < state.list.length; i++) {
      if (state.list[i][path]) {
        for (let x = 0; x < state.list[i][path].length; x++) {
          // SPLIT FROM COMMA
          for (let y = 0; y < state.list[i][path][x].length; y++) {
            const splitted = state.list[i][path][x].split(",");
            for (let y = 0; y < splitted.length; y++) {
              types.push(splitted[y].toUpperCase());
            }
          }
        }
      }
    }
    types = [...new Set(types)];
    types = types.sort()
    dispatch({ type: path.toUpperCase(), payload: types });
    console.log(state[path]);
  }, [path, state.list]);
};

export default useTypes;
