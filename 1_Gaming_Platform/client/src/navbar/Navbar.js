import React from "react";
import TypeDiv from "./TypeDiv";
import InputDiv from "./InputDiv";
import { Link } from "react-router-dom";
import Logo from "../assets/imgs/header/Logo.jpg";

const Navbar = () => {
  return (
    <nav>
      <div id="headerDiv">
        <Link to="/">
          <img src={Logo} alt="Logo" id="logo" />
        </Link>
      </div>
      <form id="searchForm">
        <TypeDiv />
        <InputDiv />
      </form>
    </nav>
  );
};

export default Navbar;
