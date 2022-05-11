import React from "react";
import { render } from "react-dom";
import Form from "./form.jsx";
import WordList from "./wordList.jsx";

const axios = require('axios');

class Glossary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      definition: '',
      wdPairs: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleWordChange = this.handleWordChange.bind(this);
    this.handleDefinitionChange = this.handleDefinitionChange.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    this.refresh();
  }
  render() {
    return (
      <div>
        <Form handleSubmit={this.handleSubmit} handleWordChange={this.handleWordChange} handleDefinitionChange={this.handleDefinitionChange}/>
        <h1>GLOSSARY</h1>
        <WordList wdPairs={this.state.wdPairs}/>
      </div>
    );
  }

  refresh() {
    return axios.get('/words')
    .then(response => {
      console.log('refresh data', response.data);
      return this.setState({wdPairs: response.data});
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    axios.post('/words', {
      word: this.state.word,
      definition: this.state.definition
    })
    .then(() => {
      console.log('refresh after adding');
      return this.refresh();
    })
    .catch(err => {
      console.log('handleSubmit error');
    })
  }

  handleWordChange(e) {
    this.setState({word: e.target.value});
  }
  handleDefinitionChange(e) {
    this.setState({definition: e.target.value});
  }
}

export default Glossary;