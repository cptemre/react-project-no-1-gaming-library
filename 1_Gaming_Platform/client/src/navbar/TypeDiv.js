import React, { useState } from "react";
// JQUERY
import $ from "jquery";

const TypeDiv = () => {
  const [isClicked, setIsClicked] = useState(false);

  //#region TYPES FUNCTIONS TO HIDE AND SHOW
  // FUNCTION TO LOOP TYPES TO SCALE THEM AND ADJUST SCROLLBAR
  const interval = (i, dom, value, scroll) => {
    setTimeout(() => {
      $(dom).css("transform", `scale(${value})`);
      if (i === 3) {
        $("#typesDiv").css("overflow-y", `${scroll}`);
      }
    }, 100 * i);
  };

  // DROPDOWN CLASS CLICK EVENT TO ADJUST TYPES
  const dropdownClick = () => {
    if (isClicked) {
      $(".types").each((i, dom) => {
        interval(i, dom, 0, "hidden");
      });
    } else {
      $(".types").each((i, dom) => {
        interval(i, dom, 1, "scroll");
        $("#downArrow").css({
          transform: "rotate(0deg)",
        });
      });
    }
    setIsClicked(!isClicked);
  };

  // BODY CLICK EVENT TO HIDE TYPES IF E DOES NOT MATCH TO ID TYPEDIV
  $("body").mouseup(function (e) {
    // write this
    if (e.currentTarget !== $("#typeDiv")) {
      $(".types").each((i, dom) => {
        interval(i, dom, 0, "hidden");
      });
    }
  });
  //#endregion TYPES FUNCTIONS TO HIDE AND SHOW

  const dropdownEnter = () => {
    $("#filterType").css({
      color: "var(--hoverShadow)",
      textShadow: "4px 4px var(--hoverColor)",
    });

    $("#downArrow").css({
      transform: "rotate(-22.5deg)",
    });
  };
  const dropdownLeave = () => {
    $("#filterType").css({
      color: "var(--lightBlue)",
      textShadow: "2px 2px var(--purpleShadow)",
    });
    $("#downArrow").css({
      animationPlayState: "initial",
      transform: "rotate(0deg)",
    });
  };
  return (
    <div id="typeMainDiv">
      <div
        id="typeDiv"
        onMouseEnter={() => dropdownEnter()}
        onMouseLeave={() => dropdownLeave()}
        onClick={() => dropdownClick()}
      >
        <div id="downArrow" className="dropdown">
          &#8623;
        </div>
        <div id="filterType" className="dropdown">
          GAMES
        </div>
        <div id="seperator"></div>
      </div>
    </div>
  );
};

export default TypeDiv;
