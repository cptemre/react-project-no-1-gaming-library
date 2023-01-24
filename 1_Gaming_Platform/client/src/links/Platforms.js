import React, { useContext, useState, useEffect } from "react";
import { Context } from "../utilities/Context";
import Links from "../utilities/Links";
// HOOKS
import useTypes from "../hooks/useTypes";
import useURL from "../hooks/useURL";

const Platforms = () => {
  const { state, dispatch } = useContext(Context);
  const [link, setLink] = useState([]);
  const [url, setUrl] = useState(document.URL.split("/"));
  const [lastURL, setLastURL] = useState(url[url.length - 1]);
  const [path, setPath] = useState("");
  const paths = useURL(document.URL);

  useEffect(() => {
    // PREPARE URL PART
    if (paths[1] && paths[2]) {
      setLastURL(paths[1]);
      setPath(paths[2]);
    }
  }, [paths]);

  useEffect(() => {
    dispatch({ type: "URL", payload: lastURL });
  }, [state.list]);

  // SET NEW PATH WITH USESTATE
  useTypes(state, dispatch, lastURL);

  // SET SUB FOLDER NAMES
  useEffect(() => {
    setLink(state[lastURL]);
  }, [state[lastURL]]);

  return (
    <>
      {path && link && (
        <Context.Provider value={{ path, link }}>
          <Links />
        </Context.Provider>
      )}
    </>
  );
    
  
};

export default Platforms;
