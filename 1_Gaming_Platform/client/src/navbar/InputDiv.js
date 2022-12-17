import React, { useEffect } from "react";
import SearchResultsDiv from "./SearchResultsDiv";
import $ from "jquery";

const InputDiv = () => {
  // FOCUS TO INPUT IN THE PAGE RELOAD
  useEffect(() => {
    document.getElementById("search").focus();
  }, []);

  // INPUT FOCUS ANIMATION
  const focusHandle = () => {
    $("#dot").animate({ left: "100%" }, 500);
    $("#underline").animate({ width: "100%" }, 500);
  };
  // INPUT FOCUS OUT ANIMATION
  const blurHandle = () => {
    $("#dot").animate({ left: 0 }, 500);
    $("#underline").animate({ width: 0 }, 500);
  };
  return (
    <div id="inputMain">
      <div id="inputDiv">
        <input
          id="search"
          type="text"
          placeholder="Search here"
          onFocus={() => focusHandle()}
          onBlur={() => blurHandle()}
        />
        <div id="inputUnderlineDiv">
          <div id="dot"></div>
          <div id="underline"></div>
        </div>
      </div>
      <SearchResultsDiv />
    </div>
  );
};

export default InputDiv;
