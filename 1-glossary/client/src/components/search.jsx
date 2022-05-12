import React from "react";
import { render } from "react-dom";


function Search(props) {
  return <div className="form">
    <form onSubmit={props.handleSearch}>
      <label>
        Search the glossary:
        <br />
        <input type="text" name="search" placeholder="search" onChange={props.handleSearchChange}/>
      </label>
      <input type="submit" value="Search" />
    </form>
  </div>;
}

export default Search;