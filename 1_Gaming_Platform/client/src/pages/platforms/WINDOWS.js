import React, { useContext } from "react";
import { Context } from "../../utilities/Context";
import GameDiv from "../../utilities/GameDiv";

const WINDOWS = () => {
  const { state, dispatch } = useContext(Context);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <GameDiv />
    </Context.Provider>
  );
};

export default WINDOWS;
