import React from "react";

const InputDiv = () => {
  return (
    <div id="inputDiv">
      <input type="text" placeholder="Write here" />
      <div id="inputUnderlineDiv">
        <div id="dot"></div>
        <div id="underline"></div>
      </div>
    </div>
  );
};

export default InputDiv;
