import React, { useContext, useState, useEffect } from "react";
import { Context } from "../utilities/Context";
import Links from "../utilities/Links";
import useTypes from "../hooks/useTypes";

const Platforms = () => {
  const { state, dispatch, type, typePath } = useContext(Context);
  const [link, setLink] = useState([]);
  const [path, setPath] = useState(typePath);
  const [pathLink, setPathLink] = useState(type);

  // SET NEW PATH WITH USESTATE
  useTypes(state, dispatch, pathLink);


  // SET SUB FOLDER NAMES
  useEffect(() => {
    setLink(state.link);
  }, [state.link]);

  return (
    <Context.Provider value={{ state, dispatch, path, link }}>
      <Links />
    </Context.Provider>
  );
};

export default Platforms;
