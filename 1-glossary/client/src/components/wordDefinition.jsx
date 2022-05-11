import React from "react";
import { render } from "react-dom";

const axios = require('axios');

class WordDefinition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editWord: false,
      editDefinition: false,
      word: this.props.pair.word,
      definition: this.props.pair.definition,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleWordClick = this.handleWordClick.bind(this);
    this.handleWordChange = this.handleWordChange.bind(this);
    this.handleDefinitionClick = this.handleDefinitionClick.bind(this);
    this.handleDefinitionChange = this.handleDefinitionChange.bind(this);
  }

  render() {
    if (this.state.editWord) {
      return (<tr key={this.props.pair._id} wid={this.props.pair._id}>
        <td className="delete" onClick={this.props.handleDelete}>❌</td>
        <td className="word"><input type="text" value={this.state.word} onChange={this.handleWordChange} onBlur={this.handleWordClick} onKeyDown={this.onKeyDown}/></td>
        <td className="definition" onClick={this.handleDefinitionClick}>{this.state.definition}</td>
      </tr>)

    } else if (this.state.editDefinition) {
      return (<tr key={this.props.pair._id} wid={this.props.pair._id}>
        <td className="delete" onClick={this.props.handleDelete}>❌</td>
        <td className="word" onClick={this.handleWordClick}>{this.state.word}</td>
        <td className="definition"><input type="text" value={this.state.definition} onChange={this.handleDefinitionChange} onBlur={this.handleDefinitionClick} onKeyDown={this.onKeyDown}/></td>
      </tr>)

    }else {
      return (<tr key={this.props.pair._id} wid={this.props.pair._id}>
        <td className="delete" onClick={this.props.handleDelete}>❌</td>
        <td className="word" onClick={this.handleWordClick}>{this.state.word}</td>
        <td className="definition" onClick={this.handleDefinitionClick}>{this.state.definition}</td>
      </tr>)
    }
  }

  handleWordClick() {
    this.setState({editWord: !this.state.editWord})
  }

  handleDefinitionClick() {
    this.setState({editDefinition: !this.state.editDefinition})
  }

  handleChange(e) {
    console.log(e.target.parentElement);
  }

  handleWordChange(e) {
    this.setState({word: e.target.value})
  }

  handleDefinitionChange(e) {
    this.setState({definition: e.target.value})
  }

  onKeyDown(e) {
    if (e.key === "Enter" || e.key === "Escape") {
      e.target.blur();
    }
  }
}

export default WordDefinition;