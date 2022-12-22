import { useEffect, useState } from "react";
import $ from "jquery";

const useLength = (state, dispatch) => {
  useEffect(() => {
    if (state.filteredTypeList.length === state.domLength) {
      $(".loadBtn").css("transform", "scale(0)");
    } else {
      $(".loadBtn").css("transform", "scale(1)");
      $(".loadBtn").css("background-color", "var(--loadGreen)");
    }
  }, [state]);
};

export default useLength;
