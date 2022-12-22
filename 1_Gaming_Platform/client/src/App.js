import React, { useReducer, useEffect, useState } from "react";
import Home from "./Home";
import Games from "./pages/Games";
import Navbar from "./navbar/Navbar";
import Load from "./Load";

// HOOKS
import useFilter from "./hooks/useFilter";

//#region CSS
import "./CSS/index.css";
import "./CSS/load.css";

//#region NAVBAR
import "./CSS/navbar/headerDiv.css";

//#region SEARCHFORM
import "./CSS/navbar/searchForm/typeDiv.css";
import "./CSS/navbar/searchForm/inputDiv.css";
import "./CSS/navbar/searchForm/typesDiv.css";
import "./CSS/navbar/searchForm/searchResultsDiv.css";
//#endregion SEARCHFORM

//#endregion NAVBAR

//#region MAIN
import "./CSS/main/home.css";
import "./CSS/main/games.css";

//#endregion MAIN

//#endregion CSS

// GLOBAL CONTEXT FILE
import { Context } from "./Context";
// ROUTER
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// REDUCER AND DEFAULTSTATE
import { reducer, defaultState } from "./reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [list, setList] = useState([]);

  // SET YOUR DATA TO STATE
  useEffect(() => {
    const data = require("./gamesList.json");
    setList(data);
    dispatch({ type: "SHOW", payload: false });
  }, []);

  useEffect(() => {
    // SET YOUR LIST TO STATE.LIST
    dispatch({ type: "GET_ALL", payload: list });
  }, [list]);

  return (
    <Router>
      <Context.Provider value={{ state }}>
        <Navbar />
      </Context.Provider>
      <Routes>
        <Route
          path="/"
          element={
            <Context.Provider value={{ state, dispatch }}>
              <Home />
            </Context.Provider>
          }
        />
        <Route
          path="/GAMES"
          element={
            <Context.Provider value={{ state, dispatch }}>
              <Games />
            </Context.Provider>
          }
        />
        <Route path="*" element="Page is not exist" />
      </Routes>
      {state.show && (
        <Context.Provider value={{ dispatch }}>
          <Load />
        </Context.Provider>
      )}
    </Router>
  );
};

export default App;
