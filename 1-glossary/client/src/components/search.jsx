import React from "react";
import { render } from "react-dom";


function Search(props) {
  return <div className="form">
    <form onSubmit={props.handleSearch}>
      <label>
        Filter the glossary:
        <br />
        <input type="text" name="filter" placeholder="filter" onChange={props.handleSearchChange}/>
      </label>
    </form>
  </div>;
}

export default Search;