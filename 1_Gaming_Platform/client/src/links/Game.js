import React, { useContext } from "react";
// CONTEXT
import { Context } from "../utilities/Context";
const Game = () => {
  const { state, dispatch } = useContext(Context);
  return <div className="gamePage">Game</div>;
};

export default Game;
