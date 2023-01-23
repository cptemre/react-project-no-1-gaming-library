import React, { useContext, useState, useEffect } from "react";
import $ from "jquery";
import { Context } from "../utilities/Context";
import { Link } from "react-router-dom";

const SearchResultsDiv = () => {
  const { searchArray } = useContext(Context);
  const [results, setResults] = useState([]);

  // WHEN SEARCH ARRAY CHANGES SET A NEW USESTATE
  useEffect(() => {
    // SELECT ONLY FIRST 5 GAMES
    const tempArray = searchArray.filter((game, i) => i <= 4);
    setResults(tempArray);
  }, [searchArray]);

  //#region MOUSEHANDLES
  const mouseenterHandle = (e) => {
    // IMG VARIABLE
    const searchImg = $(e.currentTarget).children(".searchImg");
    // SET ALL FIGURES FILTER TO GET YELLOWISH COLOR
    $(".searchFigure").css("filter", "sepia(60%)");
    // SET CURRENT FIGURE'S FILTER CONTRAST TO HIGHER AND HEIGHT
    $(e.currentTarget).css({
      filter: "contrast(110%)",
      height: "10rem",
    });
    // ZOOM TO CURRENT IMAGE
    $(searchImg).css("transform", "scale(1.5)");
  };
  const mouseleaveHandle = (e) => {
    // IMG VARIABLE
    const searchImg = $(e.currentTarget).children(".searchImg");
    // SET ALL FIGURES FILTER TO NONE
    $(".searchFigure").css("filter", "none");
    // SET CURRENT FIGURE'S FILTER CONTRAST AND HEIGHT BACK TO NORMAL
    $(e.currentTarget).css({
      filter: "none",
      height: "4rem",
    });
    // ZOOM BACK TO CURRENT IMAGE
    $(searchImg).css("transform", "scale(1)");
  };

  const clickHandle = () => {
    $("#search").val("");
    $("#searchResultsDiv").css("transform", "scale(0)");
  };
  //#endregion MOUSEHANDLES

  return (
    <div id="searchResultsDiv">
      {results.map((result) => {
        const to = result.names.replace(/ /g, "_");
        return (
          <Link
            to={`/game/${to}`}
            key={result.names + " result"}
            onClick={() => clickHandle()}
          >
            <figure
              className="searchFigure"
              onMouseEnter={(e) => mouseenterHandle(e)}
              onMouseLeave={(e) => mouseleaveHandle(e)}
            >
              <img
                src={require(`../assets/imgs/games/${result.names}/1.jpg`)}
                alt={result.names}
                className="searchImg"
              />
              <figcaption className="searchCaption">{result.names}</figcaption>
            </figure>
          </Link>
        );
      })}
    </div>
  );
};

export default SearchResultsDiv;
