import React, { useContext, useState, useEffect } from "react";
import { Context } from "../utilities/Context";
import Links from "../utilities/Links";
import useList from "../hooks/useList";
const PLATFORMS = () => {
  const { state, dispatch } = useContext(Context);
  const [link, setLink] = useState([]);
  const path = "GENRES/";

  // SET STATE.PLATFORMS
  useList(state, dispatch, "genres");

  // SET TYPES BY FILTERING IT WITH CURRENT SELECTED VALUE IN FILTERTYPE
  useEffect(() => {
    setLink(state.genres);
  }, [state.genres]);

  return (
    <Context.Provider value={{ path, link }}>
      <Links />
    </Context.Provider>
  );
};

export default PLATFORMS;
