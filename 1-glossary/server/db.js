const mongoose = require("mongoose");
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

let add = function(word, definition) {
  console.log('add!', word, definition);
  return Word.create({word, definition});
};

let retrieve = function() {
  console.log('retrieve!');
  return Word.find({}, 'word definition');

};

module.exports.add = add;
module.exports.retrieve = retrieve;
