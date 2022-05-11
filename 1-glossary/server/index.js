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
  db.retrieve()
    .then(data => {
      console.log('app get words data', data);
      res.send(data);
      res.end();
    })
    .catch(err => {
      console.log('app.get \/words error')
    })

});

app.post('/words', (req, res) => {
  console.log('got a post request!');
  console.log(req.body.word, req.body.definition);
  db.add(req.body.word, req.body.definition)
    .then(() => {
      res.end();
    })
    .catch(err => {
      console.log('app.post \/words error')
    })
    ;
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
