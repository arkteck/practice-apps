import React from "react";
import { render } from "react-dom";
import reactStringReplace from 'react-string-replace';

const axios = require('axios');

class Definition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      definition: this.props.pair.definition,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.stylize = this.stylize.bind(this);
  }

  render() {
    if (this.state.edit) {
      return (
        <td className="definition"><input size={this.state.definition.length} type="text" value={this.state.definition} onChange={this.handleChange} onBlur={this.onBlur} onKeyDown={this.onKeyDown} /></td>
      )
    } else {
      return (
        <td className="definition" onClick={this.handleClick}>{this.stylize()}</td>
      )
    }
  }

  handleClick(e) {
    this.setState({edit: true});
  }

  handleChange(e) {
    this.setState({definition: e.target.value});
  }

  onKeyDown(e) {
    if (e.key === "Enter" || e.key === "Escape") {
      e.target.blur();
    }
  }

  onBlur(e) {
    this.setState({edit: false});
    if (e.target.value === '') {
      this.setState({word: this.props.pair.word, definition: this.props.pair.definition})
    } else {
      this.props.handleEdit(this.props.pair._id, this.props.pair.word, this.state.definition);
    }
  }

  stylize() {
    let s = reactStringReplace(this.state.definition, /_(.*?)_/g, (match, i) => (
      // <i>{match}</i>
      <span key = {i} style={{'fontStyle': 'italic'}}>{match}</span>
    ))
    s = reactStringReplace(s, /\*\*(.*?)\*\*/g, (match, i) => (
      // <b>{match}</b>
      <span key = {i} style={{'fontWeight': 'bold'}}>{match}</span>
    ))
    return s;
  }

}

export default Definition;