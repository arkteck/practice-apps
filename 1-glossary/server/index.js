require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const db = require("./db.js")

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

/****
 *
 *
 * Other routes here....
 *
 *
 */

app.get('/', (req, res) => {

})

app.get('/words', (req, res) => {
  db.retrieveWords()
    .then(data => {
      // console.log('app get words data', data);
      res.send(data);
      res.end();
    })
    .catch(err => {
      console.log('app.get \/words error')
      res.end();
    })

});

app.post('/words', (req, res) => {
  console.log('got a post request!');
  console.log(req.body.word, req.body.definition);
  db.addWord(req.body.word, req.body.definition)
    .then(() => {
      res.end();
    })
    .catch(err => {
      console.log('app.post \/words error')
      res.end();
    })
    ;
});

app.post('/delete', (req, res) => {
  console.log('got a delete request!');
  db.deleteWord(req.body.wid)
  .then(() => {
    res.end();
  })
  .catch(err => {
    console.log('app.post \/delete error')
    res.end();
  })
  ;
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
