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
    let filteredTypes = state.types.filter(
      (type) => type !== $("#filterType").html()
    );
    filteredTypes = filteredTypes.sort();
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

  // CREATE A FILTERED ARRAY BY CLICKED HTML. PUT THIS TO #FILTERTYPE DOM HTML. SET NEW TYPES
  const mouseClick = (e) => {
    const html = e.currentTarget.innerHTML;
    let filtered = types.filter((type) => type !== html);
    filtered = [...filtered, $("#filterType").html()].sort();
    $("#filterType").html(html);
    setTypes(filtered);
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
            onClick={(e) => mouseClick(e)}
          >
            {type}
          </div>
        ))}
    </div>
  );
};

export default TypesDiv;
