import React, { useContext, useState, useEffect } from "react";
import { Context } from "../utilities/Context";
import Links from "../utilities/Links";

const PLATFORMS = () => {
  const { state, dispatch } = useContext(Context);
  const [link, setLink] = useState([]);
  const path = "PLATFORMS/";

  // CONTINUE FROM HERE. STATE PLATFORM SET UP WORKS
  useEffect(() => {
    let myArray = [];
    for (let i = 0; i < state.list.length; i++) {
      for (let x = 0; x < state.list[i].platforms.length; x++) {
        myArray.push(state.list[i].platforms[x].toUpperCase());
      }
    }
    myArray = [...new Set(myArray)];
    console.log(myArray);
    dispatch({ type: "PLATFORMS", payload: myArray });
  }, [state.list]);

  // SET TYPES BY FILTERING IT WITH CURRENT SELECTED VALUE IN FILTERTYPE
  useEffect(() => {
    setLink(state.platforms);
  }, [state.platforms]);

  return (
    <Context.Provider value={{ path, link }}>
      <Links />
    </Context.Provider>
  );
};

export default PLATFORMS;
