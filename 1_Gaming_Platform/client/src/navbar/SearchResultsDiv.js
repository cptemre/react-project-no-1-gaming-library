import React from "react";
import $ from "jquery";
import Bannerlord from "../assets/imgs/games/1_Bannerlord/1.jpg";

const SearchResultsDiv = () => {
  const mouseenterHandle = (e) => {
    const searchImg = $(e.currentTarget).children(".searchImg");

    $(".searchFigure").css({
      filter: "sepia(60%)",
    });
    $(e.currentTarget).css({
      filter: "contrast(110%)",
      height: "10rem",
    });
    $(searchImg).css({
      transform: "scale(1.5)",
    });
  };
  const mouseleaveHandle = (e) => {
    const searchImg = $(e.currentTarget).children(".searchImg");

    $(".searchFigure").css({
      filter: "none",
      opacity: "1",
    });
    $(e.currentTarget).css({
      filter: "none",
      height: "4rem",
    });
    $(searchImg).css({
      transform: "scale(1)",
    });
  };

  return (
    <div id="searchResultsDiv">
      <figure
        className="searchFigure"
        onMouseEnter={(e) => mouseenterHandle(e)}
        onMouseLeave={(e) => mouseleaveHandle(e)}
      >
        <img src={Bannerlord} alt="" className="searchImg" />
        <figcaption className="searchCaption">God of War</figcaption>
      </figure>
      <figure
        className="searchFigure"
        onMouseEnter={(e) => mouseenterHandle(e)}
        onMouseLeave={(e) => mouseleaveHandle(e)}
      >
        <img src={Bannerlord} alt="" className="searchImg" />
        <figcaption className="searchCaption">God of War</figcaption>
      </figure>
      <figure
        className="searchFigure"
        onMouseEnter={(e) => mouseenterHandle(e)}
        onMouseLeave={(e) => mouseleaveHandle(e)}
      >
        <img src={Bannerlord} alt="" className="searchImg" />
        <figcaption className="searchCaption">God of War</figcaption>
      </figure>
    </div>
  );
};

export default SearchResultsDiv;
