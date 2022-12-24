import React, { useContext, useState, useEffect } from "react";
import { Context } from "../utilities/Context";
import Links from "../utilities/Links";
import useTypes from "../hooks/useTypes";

const PLATFORMS = () => {
  const { state, dispatch } = useContext(Context);
  const [link, setLink] = useState([]);
  // SET NEW PATH WITH USESTATE
  const path = "PLATFORMS/";

  useEffect(() => {
    // PREPARE TYPE URL PART
    const fullURL = document.URL.split("/");
    const typeURL = fullURL[3];

    console.log(typeURL);
  }, []);

  useTypes(state, dispatch, "platforms");

  useEffect(() => {
    setLink(state.link);
  }, [state.link]);

  return (
    <Context.Provider value={{ path, link }}>
      <Links />
    </Context.Provider>
  );
};

export default PLATFORMS;
