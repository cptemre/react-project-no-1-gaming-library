import React, { useContext } from "react";
import { Context } from "../Context";
import GameDiv from "../GameDiv";

const Windows = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <GameDiv />
    </Context.Provider>
  );
};

export default Windows;
