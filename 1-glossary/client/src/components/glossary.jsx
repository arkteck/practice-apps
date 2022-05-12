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
      skip: 0,
      count: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleWordChange = this.handleWordChange.bind(this);
    this.handleDefinitionChange = this.handleDefinitionChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleRandom = this.handleRandom.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.refresh = this.refresh.bind(this);
    this.count = this.count.bind(this);
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
        <button type="button" onClick={this.handleRandom}>Random Word and Definition</button>
        <br />
        <button type="button" onClick={this.handlePrevious} disabled={this.state.skip === 0}>Previous Page</button>
        <button type="button" onClick={this.handleNext} disabled={this.state.count - this.state.skip <= 10}>Next Page</button>
        <WordList wdPairs={this.state.wdPairs} handleEdit={this.handleEdit} handleDelete={this.handleDelete}/>
      </div>
    );
  }

  refresh() {
    return this.count()
    .then(() => {
      return axios.get(`/words/${this.state.skip}`)
    })
    .then(response => {
      if (response.data.length) {
        return this.setState({wdPairs: response.data});
      } else {
        return this.handlePrevious()
      }
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

  handleNext() {
    this.setState({skip: this.state.skip + 10}, () => {
      axios.get(`/words/${this.state.skip}`)
        .then(response => {
          return this.setState({wdPairs: response.data});
        })
        .catch(err => {
          console.log('refresh error');
        })
      }
    );
  }


  handlePrevious() {
    this.setState({skip: this.state.skip - 10}, () => {
      axios.get(`/words/${this.state.skip}`)
        .then(response => {
          return this.setState({wdPairs: response.data});
        })
        .catch(err => {
          console.log('refresh error');
        })
      }
    );
  }

  count() {
    return axios.get(`/count`)
    .then(response => {
      return this.setState({count: response.data});
    })
    .catch(err => {
      console.log('count error');
    })
  }
}

export default Glossary;


