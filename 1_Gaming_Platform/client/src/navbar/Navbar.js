import React from "react";
import TypeDiv from "./TypeDiv";
import InputDiv from "./InputDiv";
import TypesDiv from "./TypesDiv";
import SearchResultsDiv from "./SearchResultsDiv";

const Navbar = () => {
  return (
    <form id="searchForm">
      <TypeDiv />
      <InputDiv />
      <TypesDiv />
      <SearchResultsDiv/>
    </form>
  );
};

export default Navbar;
