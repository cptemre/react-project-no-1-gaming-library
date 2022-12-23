import React, { useContext, useEffect, useState } from "react";
// GLOBAL CONTEXT FILE
import { Context } from "../utilities/Context";
// JQUERY
import $ from "jquery";

const TypesDiv = () => {
  // GET TYPES ARRAY
  const { state } = useContext(Context);
  // STATE TYPES SETUP
  const [types, setTypes] = useState([]);

  // SET TYPES BY FILTERING IT WITH CURRENT SELECTED VALUE IN FILTERTYPE
  useEffect(() => {
    const filteredTypes = state.types.filter(
      (type) => type !== $("#filterType").html()
    );
    setTypes(filteredTypes);
  }, [state.types]);

  //#region FUNCTIONS
  const mouseEnter = (e) => {
    $(e.currentTarget).css({
      color: "var(--lightBlue)",
      letterSpacing: "2px",
      textShadow: "2px 2px rgb(144, 55, 179)",
    });
    $("#filterType").css("opacity", 0.7);
  };

  const mouseLeave = (e) => {
    $(e.currentTarget).css({
      color: "white",
      letterSpacing: "initial",
      textShadow: "initial",
    });
    $("#filterType").css("opacity", 1);
  };
  //#endregion FUNCTIONS

  return (
    // LOOP TO CREATE TYPES
    <div id="typesDiv" value="">
      {types.map((type) => (
        <div
          key={type}
          className="types"
          onMouseEnter={(e) => mouseEnter(e)}
          onMouseLeave={(e) => mouseLeave(e)}
        >
          {type}
        </div>
      ))}
    </div>
  );
};

export default TypesDiv;
