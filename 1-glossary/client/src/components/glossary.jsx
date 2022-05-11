import React from "react";
import { render } from "react-dom";
import Form from "./form.jsx";5
import WordList from "./wordList.jsx";
import WordDefinition from "./wordDefinition.jsx";
import Search from "./search.jsx";

const axios = require('axios');

class Glossary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      definition: '',
      wdPairs: [],
      search: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleWordChange = this.handleWordChange.bind(this);
    this.handleDefinitionChange = this.handleDefinitionChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    this.refresh();
  }

  render() {
    return (
      <div>
        <h1>GLOSSARY</h1>
        <Form handleSubmit={this.handleSubmit} handleWordChange={this.handleWordChange} handleDefinitionChange={this.handleDefinitionChange}/>
        <Search handleSearch={this.handleSearch} handleSearchChange={this.handleSearchChange}/>
        <WordList wdPairs={this.state.wdPairs} handleEdit={this.handleEdit} handleDelete={this.handleDelete}/>
      </div>
    );
  }

  refresh() {
    return axios.get('/words')
    .then(response => {
      return this.setState({wdPairs: response.data});
    })
    .catch(err => {
      console.log('refresh error');
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    axios.post('/words', {
      word: this.state.word,
      definition: this.state.definition
    })
    .then(() => {
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

  handleEdit(id, word, definition) {
    axios.post('/edit', {id, word, definition})
    .then(() => {
      return this.refresh();
    })
    .catch(err => {
      console.log('handleEdit error');
    })
  }

  handleDelete(e) {
    axios.post('/delete', {
      wid: e.target.parentElement.getAttribute('wid')
    })
    .then(() => {
      return this.refresh();
    })
    .catch(err => {
      console.log('handleDelete error');
    })
  }

  handleSearch(e) {
    e.preventDefault();
    axios.post('/search', {term: this.state.search})
    .then(response => {
      return this.setState({wdPairs: response.data});
    })
    .catch(err => {
      console.log('handleDelete error');
    })

  }

  handleSearchChange(e) {
    this.setState({search: e.target.value});
  }
}

export default Glossary;