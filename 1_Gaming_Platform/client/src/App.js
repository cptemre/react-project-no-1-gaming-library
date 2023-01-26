import React, { useReducer, useEffect, useState } from "react";
// NAVBAR
import Navbar from "./navbar/Navbar";
// LOAD BUTTON
import Load from "./Load";
// HOME
import Home from "./links/Home";
// MAIN PAGES
import Platforms from "./links/Platforms";
// SUBPATHS
import PlatformTypes from "./pages/PlatformTypes";
// GAME PAGE
import Game from "./links/Game";
// ERROR PAGE
import Error from "./pages/Error";
// HOOKS
import useURL from "./hooks/useURL";

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
import "./CSS/main/game.css";
//#endregion MAIN

//#region MAIN
import "./CSS/game/table.css";
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
  const [types, setTypes] = useState([]);
  const [link, setLink] = useState([]);
  const [url, setUrl] = useState("");
  const paths = useURL(document.URL);

  // SET SUB FOLDER NAMES
  useEffect(() => {
    if (paths[0][3]) {
      setUrl(paths[0][3]);
    }
  }, [state, paths]);
  // SET SUB FOLDER NAMES
  useEffect(() => {
    // IF TYPE INCLUDES THEN SET
    if (types.includes(url.toUpperCase())) {
      setLink(state[url]);
    }
    setLink(state[url]);
  }, [state[url], url]);
  // SET YOUR DATA TO STATE
  useEffect(() => {
    const data = require("./gamesList.json");
    setList(data);
    dispatch({ type: "SHOW", payload: false });
    // IF TYPE INCLUDES THEN SET
    if (types.includes(url.toUpperCase())) {
      setLink(state[url]);
    }
    setLink(state[url]);
    // GET FAVORITES FROM LOCALSTORAGE AND SET TO STATE
    const favoritesLoc = JSON.parse(localStorage.getItem("favorites"));
    if (favoritesLoc) {
      dispatch({ type: "LOCAL", payload: favoritesLoc });
    }
  }, []);

  // CHECK FOR TYPES IN LOCALSTORAGE TO SAVE THEM IN REDUCER TO USE FOR PAGE TYPES
  useEffect(() => {
    types.map((type) => {
      const subpaths = JSON.parse(localStorage.getItem(type));
      if (subpaths) {
        dispatch({ type: type, payload: subpaths });
      }
    });
  }, [types]);

  useEffect(() => {
    // SET YOUR LIST TO STATE.LIST
    dispatch({ type: "GET_ALL", payload: list });
  }, [list]);

  // GET TYPES EXCEPT FAVORITES AND GAMES
  useEffect(() => {
    const filtered = state.types.filter((item) => {
      if (item !== "FAVORITES" && item !== "GAMES") {
        return item;
      }
    });
    setTypes(filtered);
  }, [state.types]);

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
        {["/favorites", "/games"].map((path) => (
          <Route
            key={path}
            path={path}
            element={
              <Context.Provider value={{ state, dispatch }}>
                <PlatformTypes />
              </Context.Provider>
            }
          />
        ))}

        {types.map((type) => {
          return (
            <Route
              key={`/${type}`}
              path={`/${type}`}
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
          );
        })}
        {types &&
          types.map((type) => {
            return (
              link &&
              link.map((i) => {
                if (typeof i !== "object") {
                  const subpath = i.toLowerCase().replace(/ /gi, "_");
                  return (
                    <Route
                      key={`/${type}/${subpath}`}
                      path={`/${type}/${subpath}`}
                      element={
                        <Context.Provider value={{ state, dispatch }}>
                          <PlatformTypes />
                        </Context.Provider>
                      }
                    />
                  );
                }
              })
            );
          })}
        <Route
          path="/game/:name"
          element={
            <Context.Provider value={{ state, dispatch }}>
              <Game />
            </Context.Provider>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
      {state.show && (
        <Context.Provider value={{ state, dispatch }}>
          <Load />
        </Context.Provider>
      )}
    </Router>
  );
};

export default App;
