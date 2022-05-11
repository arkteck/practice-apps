import React from "react";
import { render } from "react-dom";


function WordList(props) {
  return (
  <table>
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th>Word</th>
        <th>Definition</th>
      </tr>
    </thead>
    <tbody>
      {props.wdPairs.map(pair => (
        <tr key={pair._id} wid={pair._id}>
          <td className="delete" onClick={props.handleDelete}>❌</td>
          <td className="edit" onClick={props.handleEdit}>✏️</td>
          <td className="word">{pair.word}</td>
          <td className="definition">{pair.definition}</td>
        </tr>
      ))}
    </tbody>
  </table>
  );
}

export default WordList;