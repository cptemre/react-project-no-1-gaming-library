import React, { useContext, useState, useEffect } from "react";
import { Context } from "../utilities/Context";
import Links from "../utilities/Links";
import useTypes from "../hooks/useTypes";

const Platforms = () => {
  const { state, dispatch } = useContext(Context);
  const [link, setLink] = useState([]);
  const [url, setUrl] = useState(document.URL.split("/"));
  const [lastURL, setLastURL] = useState(url[url.length - 1]);
  const [path, setPath] = useState("");

  useEffect(() => {
    // PREPARE URL PART
    const url = document.URL.split("/");
    const lURL = url[url.length - 1];
    setLastURL(lURL);
    const lURLU = lURL.toUpperCase() + "/";
    setPath(lURLU);
  }, []);

  useEffect(() => {
    dispatch({ type: "URL", payload: lastURL });
  }, [state.list]);

  // SET NEW PATH WITH USESTATE
  useTypes(state, dispatch, lastURL);

  // SET SUB FOLDER NAMES
  useEffect(() => {
    setLink(state[lastURL]);
    console.log(state[lastURL]);
  }, [state[lastURL]]);

  return (
    <Context.Provider value={{ path, link }}>
      <Links />
    </Context.Provider>
  );
};

export default Platforms;
