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
      res.send(data);
      res.end();
    })
    .catch(err => {
      console.log('app.get \/words error')
      res.end();
    })
});

app.get('/words/:skip', (req, res) => {
  db.retrieveWords(Number(req.params.skip))
    .then(data => {
      res.send(data);
      res.end();
    })
    .catch(err => {
      console.log('app.get \/words error')
      res.end();
    })
});

app.get('/count', (req, res) => {
  db.count()
    .then(data => {
      res.send(data.toString());
      res.end();
    })
    .catch(err => {
      console.log('app.get \/count error')
      res.end();
    })
});

app.post('/words', (req, res) => {
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
  db.deleteWord(req.body.wid)
  .then(() => {
    res.end();
  })
  .catch(err => {
    console.log('app.post \/delete error')
    res.end();
  });
})

app.post('/edit', (req, res) => {
  db.editWord(req.body.id, req.body.word, req.body.definition)
  .then(() => {
    res.end();
  })
  .catch(err => {
    console.log('app.post \/delete error')
    res.end();
  });
})

app.post('/search', (req, res) => {
  db.search(req.body.term)
  .then(data => {
    res.send(data);
    res.end();
  })
  .catch(err => {
    console.log('app.post \/search error')
    res.end();
  });
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
