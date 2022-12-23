import { useEffect } from "react";

const useList = (state, dispatch, type) => {
  // CONTINUE FROM HERE. STATE PLATFORM SET UP WORKS
  useEffect(() => {
      let myArray = [];
    for (let i = 0; i < state.list.length; i++) {
      for (let x = 0; x < state.list[i][type].length; x++) {
        const item = state.list[i][type][x];
        myArray.push(item.toUpperCase());
      }
    }
    myArray = [...new Set(myArray)];
    console.log(myArray);
    dispatch({ type: type.toUpperCase(), payload: myArray });
  }, [state.list, type]);
};

export default useList;
