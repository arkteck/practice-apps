import React from "react";
import { render } from "react-dom";


function WordList(props) {
  return (
  <table>
    <thead>
      <tr>
        <th>Word</th>
        <th>Definition</th>
      </tr>
    </thead>
    <tbody>
      {props.wdPairs.map(pair => (
        <tr>
          <td>{pair.word}</td>
          <td>{pair.definition}</td>
        </tr>
      ))}
    </tbody>
  </table>
  );
}

export default WordList;