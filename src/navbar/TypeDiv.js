import React, { useState, useEffect, useContext } from "react";
import TypesDiv from "./TypesDiv";
import { Context } from "../utilities/Context";
// JQUERY
import $ from "jquery";

const TypeDiv = () => {
  const [isClicked, setIsClicked] = useState(true);
  const { state } = useContext(Context);
  // SHOW AND HIDE MENU
  useEffect(() => {
    const typesLength = state.types.length;
    if (isClicked) {
      $(".types").each((i, dom) => {
        interval(i, dom, 0, "hidden");
      });
      // AFTER EVERY TYPE USES ANIMATION, SCALE DOWN THE DIV
      setTimeout(() => {
        $("#typesDiv").css("transform", "scale(0)");
      }, 100 * typesLength);
    } else {
      $(".types").each((i, dom) => {
        interval(i, dom, 1, "scroll");
        $("#downArrow").css({
          transform: "rotate(0deg)",
        });
      });
      // SHOW THE TYPES DIV WITH SCALE
      $("#typesDiv").css("transform", "scale(1)");
    }
  }, [isClicked, state.types]);

  //#region TYPES FUNCTIONS TO HIDE AND SHOW
  // FUNCTION TO LOOP TYPES TO SCALE THEM AND ADJUST SCROLLBAR
  const interval = (i, dom, value, scroll, z) => {
    setTimeout(() => {
      $(dom).css("transform", `scale(${value})`);
      if (i === 3) {
        $("#typesDiv").css("overflow-y", `${scroll}`);
      }
    }, 100 * i);
  };

  // DROPDOWN CLASS CLICK EVENT TO ADJUST TYPES AND CLOSE DROPDOWN IF CLICK ANOTHER PLACE IN BODY
  $("body").mousedown(function (e) {
    if (e.target.className !== "dropdown") {
      setIsClicked(true);
    } else {
      setIsClicked(!isClicked);
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
      >
        <div id="downArrow" className="dropdown">
          &#8623;
        </div>
        <div id="filterType" className="dropdown">
          GAMES
        </div>
        <div id="seperator"></div>
      </div>
      <TypesDiv />
    </div>
  );
};

export default TypeDiv;
