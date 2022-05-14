require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

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

app.post('/checkout', (req, res) => {
  db.queryAsync('INSERT INTO sessions SET ?', req.body)
    .then((data) => {
      console.log('app post checkout data', data);
      res.sendStatus(200);
    })
    .catch(err => {
      console.log('app post checkout error', err.code);
      let newData = req.body;
      let sessionid = newData.sessionid;
      delete newData.sessionid;
      if (err.code === 'ER_DUP_ENTRY') {
        return db.queryAsync('UPDATE sessions SET ? where ?', [newData, {sessionid}])
        .then((data) => {
          console.log('app post checkout data', data);
          res.sendStatus(200);
        })
        .catch(err => {
          console.log('app post checkout error', err.code);
          res.sendStatus(400);
        })
      } else {
        console.log('err code NOT ER_DUP_ENTRY', err);
        res.sendStatus(400);
      }
    })
});

app.get('/checkout', (req, res) => {
  db.queryAsync('SELECT * FROM sessions WHERE ?', {sessionid: req.body.sessionid})
    .then(response => {
      // console.log(response);
      res.send(response);
    })
    .catch(err => {
      console.log('app get checkout error', err);
    })
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
