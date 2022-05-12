import React from "react";
import { render } from "react-dom";
import reactStringReplace from 'react-string-replace';

const axios = require('axios');

class Word extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      word: this.props.pair.word,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.stylize = this.stylize.bind(this);
  }


  render() {
    if (this.state.edit) {
      return (
        <td className="word"><input size={this.state.word.length} type="text" value={this.state.word} onChange={this.handleChange} onBlur={this.onBlur} onKeyDown={this.onKeyDown} /></td>
      )
    } else {
      return (
        <td className="word" onClick={this.handleClick}>{this.stylize()}</td>
      )
    }
  }

  handleClick(e) {
    this.setState({edit: true});
  }

  handleChange(e) {
    this.setState({word: e.target.value});
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
      this.props.handleEdit(this.props.pair._id, this.state.word, this.props.pair.definition);
    }
  }

  stylize() {
    let s = reactStringReplace(this.state.word, /_(.*?)_/g, (match, i) => (
      <span key = {match + i} style={{'fontStyle': 'italic'}}>{match}</span>
    ))
    s = reactStringReplace(s, /\*\*(.*?)\*\*/g, (match, i) => (
      <span key = {match + i} style={{'fontWeight': 'bold'}}>{match}</span>
    ))
    return s;
  }

}

export default Word;