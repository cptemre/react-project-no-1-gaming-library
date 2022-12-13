import React, { useReducer } from "react";
import Home from "./Home";
import Navbar from "./navbar/Navbar";
import Logo from "./assets/imgs/header/Logo.jpg";

//#region CSS
import "./CSS/index.css";

//#region NAVBAR
import "./CSS/navbar/headerDiv.css";

//#region SEARCHFORM
import "./CSS/navbar/searchForm/typeDiv.css";
import "./CSS/navbar/searchForm/inputDiv.css";
import "./CSS/navbar/searchForm/typesDiv.css";
import "./CSS/navbar/searchForm/searchResultsDiv.css";
//#endregion SEARCHFORM

//#endregion NAVBAR

//#endregion CSS

// GLOBAL CONTEXT FILE
import { Context } from "./Context";
// ROUTER
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// LOCAL DATA
// REDUCER AND DEFAULTSTATE
import { reducer, defaultState } from "./reducer";
const localData = require("./gamesList.json");

const App = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <Router>
      <nav>
        <div id="headerDiv">
          <Link to="/">
            <img src={Logo} alt="Logo" id="logo" />
          </Link>
        </div>
        <Context.Provider value={{ state }}>
          <Navbar />
        </Context.Provider>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
