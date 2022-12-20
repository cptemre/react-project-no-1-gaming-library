import React from "react";
import $ from "jquery";
// import Bannerlord from "../assets/imgs/games/1_Bannerlord/1.jpg";

const SearchResultsDiv = () => {
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
  //#endregion MOUSEHANDLES

  return (
    <div id="searchResultsDiv">
      {/* <figure
        className="searchFigure"
        onMouseEnter={(e) => mouseenterHandle(e)}
        onMouseLeave={(e) => mouseleaveHandle(e)}
      >
        <img src={Bannerlord} alt="" className="searchImg" />
        <figcaption className="searchCaption">Bannerlord</figcaption>
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
      </figure> */}
    </div>
  );
};

export default SearchResultsDiv;
