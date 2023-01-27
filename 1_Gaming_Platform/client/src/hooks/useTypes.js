import { useEffect } from "react";

const useTypes = (state, dispatch, paths) => {
  useEffect(() => {
    let types = [];
    for (let i = 0; i < state.list.length; i++) {
      if (state.list[i][paths]) {
        for (let x = 0; x < state.list[i][paths].length; x++) {
          // SPLIT FROM COMMA
          for (let y = 0; y < state.list[i][paths][x].length; y++) {
            const splitted = state.list[i][paths][x].split(",");
            for (let y = 0; y < splitted.length; y++) {
              types.push(splitted[y].toUpperCase());
            }
          }
        }
      }
    }
    // DELETE COPIES AND SORT THEM
    types = [...new Set(types)];
    types = types.sort();
    // SAVE TO LOCALSTORAGE
    localStorage.setItem(paths.toUpperCase(), JSON.stringify(types));

    dispatch({ type: paths.toUpperCase(), payload: types });
  }, [paths, state.list]);
};

export default useTypes;
