import React, { useEffect, useRef, useContext, useState } from "react";
import SearchResultsDiv from "./SearchResultsDiv";
import $ from "jquery";
import { Context } from "../utilities/Context";
const InputDiv = () => {
  const inputRef = useRef();
  const { state } = useContext(Context);
  const [searchArray, setSearchArray] = useState([]);
  // FOCUS TO INPUT IN THE PAGE RELOAD
  useEffect(() => {
    document.getElementById("search").focus();
  }, []);

  //#region FUNCTIONS

  const searchScaling = (value) => {
    if (value) {
      $("#searchResultsDiv").css("transform", "scale(1)");
    } else {
      $("#searchResultsDiv").css("transform", "scale(0)");
    }
  };

  // INPUT FOCUS ANIMATION
  const focusHandle = (e) => {
    const value = e.target.value;
    $("#dot").animate({ left: "100%" }, 500);
    $("#underline").animate({ width: "100%" }, 500);

    // SEARCHRESULTSDIV SCALING
    searchScaling(value);
  };
  // INPUT FOCUS OUT ANIMATION
  const blurHandle = () => {
    $("#dot").animate({ left: 0 }, 500);
    $("#underline").animate({ width: 0 }, 500);

    // SEARCHRESULTSDIV SCALING
    $("#searchResultsDiv").css("transform", "scale(0)");
  };

  const valueChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    let type = $("#filterType").html().toLowerCase();
    let tempArray = [];
    setSearchArray([]);

    // SEARCHRESULTSDIV SCALING
    searchScaling(value);

    // REGEX MATCH CHECK
    const myRegex = new RegExp(value, "gi");
    if (type === "games") {
      tempArray = state.list.filter((game) => {
        if (game.names.match(myRegex)) {
          return game.names;
        }
      });
    } else if (type === "favorites") {
      tempArray = state.favorites.filter((game) => {
        if (game.names.match(myRegex)) {
          return game.names;
        }
      });
    } else {
      tempArray = state.list.filter((game) => {
        if (game[type]) {
          for (let i = 0; i < game[type].length; i++) {
            if (game[type][i].match(myRegex)) {
              return game;
            }
          }
        }
      });
    }
    setSearchArray(tempArray);
  };

  //#endregion FUNCTIONS

  return (
    <div id="inputMain">
      <div id="inputDiv">
        <input
          id="search"
          type="text"
          placeholder="Search here"
          ref={inputRef}
          onFocus={(e) => focusHandle(e)}
          onBlur={() => blurHandle()}
          onChange={(e) => valueChange(e)}
        />
        <div id="inputUnderlineDiv">
          <div id="dot"></div>
          <div id="underline"></div>
        </div>
      </div>
      <Context.Provider value={{ searchArray }}>
        <SearchResultsDiv />
      </Context.Provider>
    </div>
  );
};

export default InputDiv;
