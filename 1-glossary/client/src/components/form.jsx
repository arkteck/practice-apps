import React from "react";
import { render } from "react-dom";


function Form(props) {
  return <div className="form">
    <form onSubmit={props.handleSubmit}>
      <label>
        Add a word and definition pair:
        <br />
        <input type="text" name="word" placeholder="word" onChange={props.handleWordChange} required/>
        <br />
        <input type="text" name="definition" placeholder="definition" onChange={props.handleDefinitionChange} required/>
        <br />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>;
}

export default Form;