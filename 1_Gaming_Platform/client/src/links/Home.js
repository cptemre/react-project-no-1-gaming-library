import React, { useContext, useState, useEffect } from "react";
import { Context } from "../utilities/Context";
import Links from "../utilities/Links";

// HOOKS
import useFilter from "../hooks/useFilter";

const Home = () => {
  const { state, dispatch } = useContext(Context);
  const [link, setLink] = useState([]);
  const path = "";

  useFilter(state, dispatch);

  // SET TYPES BY FILTERING IT WITH CURRENT SELECTED VALUE IN FILTERTYPE
  useEffect(() => {
    setLink(state.types);
  }, [state.types]);

  return (
    <Context.Provider value={{ path, link,state }}>
      <Links />
    </Context.Provider>
  );
};

export default Home;
