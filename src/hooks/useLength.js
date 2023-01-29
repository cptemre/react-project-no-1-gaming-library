import { useEffect } from "react";
import $ from "jquery";

const useLength = (state) => {
  // SET BUTTON COLOR AND SCALE IF ALL GAMES ARE LOADED OR NOT
  useEffect(() => {
    if (state.filteredTypeList.length === state.domLength) {
      $(".loadBtn").css("transform", "scale(0)");
    } else {
      $(".loadBtn").css("transform", "scale(1)");
      $(".loadBtn").css("background-color", "var(--loadGreen)");
    }

    if (!state.domLength) {
      $(".loadBtn").css("transform", "scale(0)");
    }
  }, [state.filteredTypeList, state.domLength]);
};

export default useLength;
