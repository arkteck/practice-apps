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
    this.handleRandom = this.handleRandom.bind(this);
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
        <input type="submit" value="Random Word and Definition" onClick={this.handleRandom}/>
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
      console.log('handleSearch error');
    })
  }

  handleSearchChange(e) {
    this.setState({search: e.target.value});
    axios.post('/search', {term: e.target.value})
    .then(response => {
      return this.setState({wdPairs: response.data});
    })
    .catch(err => {
      console.log('handleSearch error');
    })
  }

  handleRandom() {
    return axios('https://random-word-api.herokuapp.com/word')
      .then(response => {
        console.log(response.data[0]);
        const options = {
          method: 'GET',
          url: `https://wordsapiv1.p.rapidapi.com/words/${response.data[0]}/definitions`,
          headers: {
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
            'X-RapidAPI-Key': '9ef4107bf6msh40b689727bea00ap199af8jsn94c98727da82'
          }
        };

        return axios.request(options)

      })
      .then(function (response) {
        console.log(response.data);
        if (response.data.definitions.length) {
          return axios.post('/words', {
            word: response.data.word,
            definition: response.data.definitions[0].definition
          })
        }
      })
      .then(() => {
        return this.refresh();
      })
      .catch(err => {
        console.log('handleRandom error');
        console.error(err);
      })

  }
}

export default Glossary;


