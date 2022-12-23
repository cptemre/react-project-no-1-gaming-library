import React, { useContext, useState, useEffect } from "react";
import { Context } from "../utilities/Context";
import Links from "../utilities/Links";

const PLATFORMS = () => {
  const { state } = useContext(Context);
  const [link, setLink] = useState([]);
  const path = "GENRES/";
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
