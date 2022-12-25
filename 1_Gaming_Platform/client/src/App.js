import React, { useReducer, useEffect, useState } from "react";
import Home from "./links/Home";
import Platforms from "./links/Platforms";
import GAMES from "./pages/GAMES";
import PlatformTypes from "./pages/PlatformTypes";
import Navbar from "./navbar/Navbar";
import Load from "./Load";

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
import { Context } from "./utilities/Context";
// ROUTER
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// REDUCER AND DEFAULTSTATE
import { reducer, defaultState } from "./utilities/reducer";

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

  // ROUTES SHOULD BE DYNAMIC
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
          path="/games"
          element={
            <Context.Provider value={{ state, dispatch }}>
              <GAMES />
            </Context.Provider>
          }
        />
        <Route
          path="/platforms"
          element={
            <Context.Provider
              value={{
                state,
                dispatch,
              }}
            >
              <Platforms />
            </Context.Provider>
          }
        />
        <Route
          path="/genres"
          element={
            <Context.Provider
              value={{
                state,
                dispatch,
              }}
            >
              <Platforms />
            </Context.Provider>
          }
        />
        <Route
          path="/modes"
          element={
            <Context.Provider
              value={{
                state,
                dispatch,
              }}
            >
              <Platforms />
            </Context.Provider>
          }
        />
        <Route
          path="/engines"
          element={
            <Context.Provider
              value={{
                state,
                dispatch,
              }}
            >
              <Platforms />
            </Context.Provider>
          }
        />
        <Route
          path="/years"
          element={
            <Context.Provider
              value={{
                state,
                dispatch,
              }}
            >
              <Platforms />
            </Context.Provider>
          }
        />
        <Route
          path="/developers"
          element={
            <Context.Provider
              value={{
                state,
                dispatch,
              }}
            >
              <Platforms />
            </Context.Provider>
          }
        />
        <Route
          path="/publishers"
          element={
            <Context.Provider
              value={{
                state,
                dispatch,
              }}
            >
              <Platforms />
            </Context.Provider>
          }
        />

        <Route
          path="/platforms/microsoft windows"
          element={
            <Context.Provider value={{ state, dispatch }}>
              <PlatformTypes />
            </Context.Provider>
          }
        />
        <Route
          path="/platforms/xbox one"
          element={
            <Context.Provider value={{ state, dispatch }}>
              <PlatformTypes />
            </Context.Provider>
          }
        />
        <Route
          path="/platforms/xbox series s"
          element={
            <Context.Provider value={{ state, dispatch }}>
              <PlatformTypes />
            </Context.Provider>
          }
        />
        <Route
          path="/platforms/xbox series x"
          element={
            <Context.Provider value={{ state, dispatch }}>
              <PlatformTypes />
            </Context.Provider>
          }
        />
        <Route
          path="/platforms/playstation 4"
          element={
            <Context.Provider value={{ state, dispatch }}>
              <PlatformTypes />
            </Context.Provider>
          }
        />
        <Route
          path="/platforms/playstation 5"
          element={
            <Context.Provider value={{ state, dispatch }}>
              <PlatformTypes />
            </Context.Provider>
          }
        />
        <Route
          path="/platforms/macos"
          element={
            <Context.Provider value={{ state, dispatch }}>
              <PlatformTypes />
            </Context.Provider>
          }
        />
        <Route
          path="/platforms/nintendo switch"
          element={
            <Context.Provider value={{ state, dispatch }}>
              <PlatformTypes />
            </Context.Provider>
          }
        />
        <Route
          path="/platforms/linux"
          element={
            <Context.Provider value={{ state, dispatch }}>
              <PlatformTypes />
            </Context.Provider>
          }
        />
        <Route
          path="/platforms/stadia"
          element={
            <Context.Provider value={{ state, dispatch }}>
              <PlatformTypes />
            </Context.Provider>
          }
        />
        <Route
          path="/platforms/amazon luna"
          element={
            <Context.Provider value={{ state, dispatch }}>
              <PlatformTypes />
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
