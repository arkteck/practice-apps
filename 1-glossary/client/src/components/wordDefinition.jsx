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
      hover: false,
    };
    this.handleWordClick = this.handleWordClick.bind(this);
    this.handleWordChange = this.handleWordChange.bind(this);
    this.handleDefinitionClick = this.handleDefinitionClick.bind(this);
    this.handleDefinitionChange = this.handleDefinitionChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  render() {
    if (this.state.editWord) {
      return (<tr key={this.props.pair._id} wid={this.props.pair._id} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
        {this.state.hover ? <td className="delete" onClick={this.props.handleDelete}>❌</td> : <td></td>}
        <td className="word"><input type="text" value={this.state.word} onChange={this.handleWordChange} onBlur={this.onBlur} onKeyDown={this.onKeyDown}/></td>
        <td className="definition" onClick={this.handleDefinitionClick}>{this.state.definition}</td>
      </tr>)

    } else if (this.state.editDefinition) {
      return (<tr key={this.props.pair._id} wid={this.props.pair._id} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
        {this.state.hover ? <td className="delete" onClick={this.props.handleDelete}>❌</td> : <td></td>}
        <td className="word" onClick={this.handleWordClick}>{this.state.word}</td>
        <td className="definition"><input type="text" value={this.state.definition} onChange={this.handleDefinitionChange} onBlur={this.onBlur} onKeyDown={this.onKeyDown}/></td>
      </tr>)

    }else {
      return (<tr key={this.props.pair._id} wid={this.props.pair._id} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
        {this.state.hover ? <td className="delete" onClick={this.props.handleDelete}>❌</td> : <td></td>}
        <td className="word" onClick={this.handleWordClick}>{this.props.pair.word}</td>
        <td className="definition" onClick={this.handleDefinitionClick}>{this.props.pair.definition}</td>
      </tr>)
    }
  }

  handleWordClick(e) {
    this.setState({editWord: true});
  }

  handleDefinitionClick(e) {
    this.setState({editDefinition: true});
  }

  handleWordChange(e) {
    this.setState({word: e.target.value});
  }

  handleDefinitionChange(e) {
    this.setState({definition: e.target.value});
  }

  onKeyDown(e) {
    if (e.key === "Enter" || e.key === "Escape") {
      e.target.blur();
    }
  }

  onBlur(e) {
    this.setState({editWord: false, editDefinition: false});
    if (e.target.value === '') {
      this.setState({word: this.props.pair.word, definition: this.props.pair.definition})
    } else {
      this.props.handleEdit(this.props.pair._id, this.state.word, this.state.definition);
    }
  }

  onMouseOver() {
    this.setState({hover: true});
  }
  onMouseOut() {
    this.setState({hover: false});
  }
}

export default WordDefinition;