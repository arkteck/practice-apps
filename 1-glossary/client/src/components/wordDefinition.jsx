import React from "react";
import { render } from "react-dom";
import Word from "./word.jsx"
import Definition from "./definition.jsx"
const axios = require('axios');

class WordDefinition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  render() {
    return (
    <tr wid={this.props.pair._id} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
      {this.state.hover ? <td className="delete" onClick={this.props.handleDelete}>❌</td> : <td></td>}
      <Word pair={this.props.pair} handleEdit={this.props.handleEdit} search={this.props.search}/>
      <Definition pair={this.props.pair} handleEdit={this.props.handleEdit} search={this.props.search}/>
    </tr>
    );
  }

  onMouseOver() {
    this.setState({hover: true});
  }

  onMouseOut() {
    this.setState({hover: false});
  }

}

export default WordDefinition;