import $ from "jquery";

//#region FUNCTIONS
  const leftSize = (min, max, width) => {
    if (width <= 390) {
      return min;
    } else {
      return max;
    }
  };
//#region GAME DIV FUNCTIONS
export const divmouseenterHandle = (e, width) => {
  // LEFT MEASURE ACCORDING TO SCREEN SIZE
  let myLeft = leftSize(3, 8, width) + "rem";

  // SETS ALL GAMEDIVS TO ZINDEX 1, FILTERS THEM TO GRAY, CHANGE THEIR OPACITY TO HALF
  $(".gameDiv").css({ zIndex: 1, filter: "grayscale(90%)", opacity: 0.5 });
  // SETS CURRENTTARGET'S ZINDEX TO HIGHER THAN OTHERS, NO FILTER AND FULL OPACITY
  $(e.currentTarget).css({
    zIndex: 4,
    filter: "none",
    opacity: 1,
  });

  // ANIMATION OF OTHER GAME FIGURES TO MOVE TO LEFT AND RIGHT
  $(e.currentTarget)
    .children(".figure0")
    .css({ left: `-${myLeft}` });
  $(e.currentTarget).children(".figure2").css({ left: myLeft });

  // SHOW GAME NAME
  $(e.currentTarget)
    .children(".gameName")
    .css({ transform: "scale(1)", width: "180%" });
};

export const divmouseleaveHandle = (e) => {
  // SETS ALL GAMEDIVS TO BACK TO NORMAL, NO FILTER, CHANGE THEIR OPACITY TO FULL
  $(".gameDiv").css({ zIndex: 4, filter: "none", opacity: 1 });

  // GAME FIGURES BACK TO ORIGINAL PLACE WITH NORMAL SCALE
  $(".gameFig").css({ left: "0", transform: "scale(1)" });

  // HIDE GAME NAME
  $(e.currentTarget)
    .children(".gameName")
    .css({ transform: "scale(0)", width: "100%" });
};
//#endregion GAME DIV FUNCTIONS

//#region GAME FIGURE FUNCTIONS
export const mouseenterHandle = (e, width) => {
  // LEFT MEASURE ACCORDING TO SCREEN SIZE
  let myLeft = leftSize(2.5, 6, width) + "rem";

  // SET CURRENT FIGURES INDEX TO HIGHER AND ZOOM
  $(e.currentTarget).css({
    "z-index": 4,
    transform: "scale(1.2)",
  });
  // CURRENT TARGET CHECK, SIZING AND ZINDEXING THEM
  if ($(e.currentTarget).hasClass("figure0")) {
    $(e.currentTarget).css({ left: `-${myLeft}` });
    $(e.currentTarget).next().css({ zIndex: 3 });
    $(e.currentTarget)
      .next()
      .next()
      .css({ zIndex: 2, transform: "scale(0.8)" });
  }
  if ($(e.currentTarget).hasClass("figure1")) {
    $(e.currentTarget).next().css({ zIndex: 3, transform: "scale(1)" });
    $(e.currentTarget).prev().css({ zIndex: 3, transform: "scale(1)" });
  }
  if ($(e.currentTarget).hasClass("figure2")) {
    $(e.currentTarget).css({ left: myLeft });
    $(e.currentTarget).prev().css({ zIndex: 3, transform: "scale(1)" });
    $(e.currentTarget)
      .prev()
      .prev()
      .css({ zIndex: 2, transform: "scale(0.8)" });
  }
};

export const mouseleaveHandle = (e, width) => {
  // LEFT MEASURE ACCORDING TO SCREEN SIZE
  let myLeft = leftSize(3, 8, width) + "rem";

  // CURRENT TARGET CHECK, SIZING AND MOVING THEM TO CENTER FOR SMOOTH ANIMATION
  if ($(e.currentTarget).hasClass("figure0")) {
    $(e.currentTarget).css({ left: `-${myLeft}` });
  }

  if ($(e.currentTarget).hasClass("figure2")) {
    $(e.currentTarget).css({ left: myLeft });
  }
  $(".gameFig").css("transform", "scale(1)");
};
//#endregion GAME FIGURE FUNCTIONS
//#endregion FUNCTIONS