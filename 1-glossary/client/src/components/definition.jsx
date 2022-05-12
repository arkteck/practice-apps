import React from "react";
import { render } from "react-dom";

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
    // this.stylize = this.stylize.bind(this);
  }


  // stylize() {
  //   let sp = this.state.definition.split('_');
  //   if (sp.length > 2) {
  //     for (let i = 1; i < sp.length - 1; i += 2) {
  //       sp[i] = <i>{sp[i]}</i>
  //     }
  //     return <span>{sp}</span>
  //   } else {
  //     return (
  //     this.state.definition
  //     )
  //   }
  // }
  render() {
    if (this.state.edit) {
      return (
        <td className="definition"><input size={this.state.definition.length} type="text" value={this.state.definition} onChange={this.handleChange} onBlur={this.onBlur} onKeyDown={this.onKeyDown} /></td>
      )
    } else {
      return (
        <td className="definition" onClick={this.handleClick}>{this.state.definition}</td>
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

}

export default Definition;