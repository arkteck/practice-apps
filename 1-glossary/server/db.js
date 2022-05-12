const mongoose = require("mongoose");
const Promise = require("bluebird");
require("dotenv").config();
// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

mongoose.connect(`mongodb+srv://${process.env.mongoUN}:${process.env.mongoPW}@cluster0.y9iir.mongodb.net/glossary?retryWrites=true&w=majority`)

const wordSchema = new mongoose.Schema({
  word: String,
  definition: String
});

const Word = mongoose.model('Word', wordSchema);

let addWord = function(word, definition) {
  console.log('add!', word, definition);
  return Word.create({word, definition});
};

let retrieveWords = function(skip = 0) {
  return Word.estimatedDocumentCount()
    .then(count => {
      if (count === 0) {
        return populateGlossary();
      }
    })
    .then(() => {
      return Word.find({}, 'word definition', {limit: 10, skip});
    })
    .catch((err) => {

    })

};

let populateGlossary = function() {
  let startingWords = [
    {word: 'glossary', definition: 'a list of terms in a special subject, field, or area of usage, with accompanying definitions'},
    {word: '词汇表', definition: 'glossary (Chinese Simplified)'},
    {word: '用語集', definition: 'glossary (Japanese)'},
    {word: '용어 사전', definition: 'glossary (Korean)'},
    {word: 'อภิธานศัพท์', definition: 'glossary (Thai)'},
    {word: 'Orðalisti', definition: 'glossary (Icelandic)'},
    {word: 'глосарій', definition: 'glossary (Ukrainian)'},
    {word: 'מילון מונחים', definition: 'glossary (Hebrew)'},
  ];
  return Word.insertMany(startingWords)
  .catch((err) => {
    console.log('populate error');
  });
}

let deleteWord = function(_id) {
  return Word.deleteOne({_id})
    .catch(err => {
      console.log('deleteWord error');
    });
}

let editWord = function(_id, word, definition) {
  return Word.findByIdAndUpdate({_id}, {word, definition})
    .catch(err => {
      console.log('deleteWord error');
    });
}

let search = function(term) {
  let searchTerm = new RegExp(term, 'i');
  return Word.find({$or: [{word: searchTerm}, {definition: searchTerm}]})
    .catch(err => {
      console.log('search error');
    });
}


module.exports.addWord = addWord;
module.exports.retrieveWords = retrieveWords;
module.exports.populateGlossary = populateGlossary;
module.exports.deleteWord = deleteWord;
module.exports.editWord = editWord;
module.exports.search = search;
