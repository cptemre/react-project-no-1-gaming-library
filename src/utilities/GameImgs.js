import React, { useContext, useEffect } from "react";
// CONTEXT
import { Context } from "../utilities/Context";
// JQUERY
import $ from "jquery";

const GameImgs = () => {
  const { item } = useContext(Context);
  const COLORS = ["var(--purpleShadow)", "white", "var(--lightBlue)"];
  const COLORS_HOVER = [
    "var(--hoverShadow)",
    "var(--seperatorBC)",
    "var(--hoverColor)",
  ];
  // CSS FOR GAME NAME COMPONENT
  useEffect(() => {
    // FAV ICON CSS SET
    $(".gameName").css({
      transform: "scale(1)",
      position: "relative",
    });
    // HIDE THE CLOSE DIV IN SMALLER IMGS
    $(".imgsDiv")
      .children(".imgContainer")
      .children(".closeDiv")
      .css("display", "none");

    imgBorder();
  }, [item]);

  //#region FUNCTIONS

  //#region TEMP IMG CONTAINER

  //#endregion TEMP IMG CONTAINER

  //#region IMAGE

  // IMG CSS SET
  const imgBorder = () => {
    // SET BORDER OFF BIGGER IMGS
    $.each($(".gameImgs"), function (i, val) {
      $(".tempImgsDiv")
        .children(".imgContainer")
        .children(".gameImgs")
        .eq(i)
        .css({
          border: "none",
          borderRadius: 0,
        });
      // SET SMALLER IMGS BORDER COLORS
      $(".imgsDiv")
        .children(".imgContainer")
        .children(".gameImgs")
        .eq(i)
        .css("border-color", COLORS[i]);
    });
  };

  // IMG MOUSE ENTER
  const imgMouseEnter = (e, i) => {
    if (
      $(e.currentTarget)
        .parent(".imgContainer")
        .parent(".tempImgsDiv")
        .css("position") !== "absolute"
    ) {
      $(e.currentTarget).css({
        borderColor: `${COLORS_HOVER[i]}`,
        transform: "scale(1.3)",
        cursor: "pointer",
      });
    }
  };

  // IMG MOUSE LEAVE
  const imgMouseLeave = (e, i) => {
    $(e.currentTarget).css({
      borderColor: `${COLORS[i]}`,
      transform: "scale(1)",
    });
  };

  // IMG CLICK
  const imgClickHandle = (e, i) => {
    // HIDE THE VIDEO
    $("iframe").css("display", "none");
    // HIDE ALL OTHER IMGS IN FRAME DIV
    $(".tempImgsDiv").children(".imgContainer").css({
      transform: "scale(0)",
    });
    // SHOW THE IMG SELECTED
    $(".tempImgsDiv").children(".imgContainer").eq(i).css({
      transform: "scale(1)",
    });
  };

  //#endregion IMAGE

  //#region CLOSE SIGN

  // CLOSE DIV MOUSE ENTER
  const closeMouseenterHandle = (e) => {
    $(e.currentTarget).css({
      backgroundColor: "var(--closeSignHover)",
      boxShadow: "-2px 2px 2px 2px black",
    });
  };
  // CLOSE DIV MOUSE LEAVE
  const closeMouseleaveHandle = (e) => {
    $(e.currentTarget).css({
      backgroundColor: "var(--closeSign)",
      boxShadow: "-2px 2px 2px 0px black",
    });
  };
  // CLOSE CLICK HANDLE
  const closeClickHandle = (e) => {
    // HIDE THE VIDEO
    $("iframe").css("display", "grid");
    // HIDE ALL OTHER IMGS IN FRAME DIV
    $(".tempImgsDiv").children(".imgContainer").css({
      transform: "scale(0)",
    });
  };
  //#endregion CLOSE SIGN

  //#endregion FUNCTIONS

  return (
    <>
      {item.src.map((path, i) => (
        <div key={path} className="imgContainer">
          <img
            src={require(`../assets/imgs/games/${item.names}/${i + 1}.jpg`)}
            alt={item.names}
            className="gameImgs"
            data-require={`../assets/imgs/games/${item.names}/${i + 1}.jpg`}
            onMouseEnter={(e) => imgMouseEnter(e, i)}
            onMouseLeave={(e) => imgMouseLeave(e, i)}
            onClick={(e) => imgClickHandle(e, i)}
          />
          <div
            className="closeDiv"
            onMouseEnter={(e) => closeMouseenterHandle(e)}
            onMouseLeave={(e) => closeMouseleaveHandle(e)}
            onClick={(e) => closeClickHandle(e)}
          >
            &#x2718;
          </div>
        </div>
      ))}
    </>
  );
};

export default GameImgs;
