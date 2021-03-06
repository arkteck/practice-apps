import React from "react";
import { render } from "react-dom";
import WordDefinition from "./wordDefinition.jsx";


function WordList(props) {
  return (
  <table>
    <thead>
      <tr>
        <th id="hiddenCol">❌</th>
        <th>Word</th>
        <th>Definition</th>
      </tr>
    </thead>
    <tbody>
      {props.wdPairs.map(pair => (
        <WordDefinition key={pair._id} pair={pair} handleDelete={props.handleDelete} handleEdit={props.handleEdit} search={props.search}/>
      ))}
    </tbody>
  </table>
  );
}

export default WordList;