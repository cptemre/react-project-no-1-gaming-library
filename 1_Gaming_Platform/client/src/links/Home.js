import React, { useContext, useState, useEffect } from "react";
import { Context } from "../utilities/Context";
import Links from "../utilities/Links";

const Home = () => {
  const { state } = useContext(Context);
  const [link, setLink] = useState([]);
  const path = "";
  // SET TYPES BY FILTERING IT WITH CURRENT SELECTED VALUE IN FILTERTYPE
  useEffect(() => {
    setLink(state.types);
  }, [state.types]);

  return (
    <Context.Provider value={{ path, link }}>
      <Links />
    </Context.Provider>
  );
};

export default Home;
