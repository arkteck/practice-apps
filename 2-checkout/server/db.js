const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() => {
    // Expand this table definition as needed:
    return db.queryAsync(
      "CREATE TABLE IF NOT EXISTS sessions (id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, checkout INTEGER NOT NULL DEFAULT 0, sessionid VARCHAR(64) NOT NULL UNIQUE, name VARCHAR(64) NULL DEFAULT NULL, email VARCHAR(64) NULL DEFAULT NULL, password VARCHAR(64) NULL DEFAULT NULL, addressLine1 VARCHAR(64) NULL DEFAULT NULL, addressLine2 VARCHAR(64) NULL DEFAULT NULL, city VARCHAR(64) NULL DEFAULT NULL, state VARCHAR(10) NULL DEFAULT NULL, zip VARCHAR(10) NULL DEFAULT NULL, cardnumber VARCHAR(32) NULL DEFAULT NULL, expdate VARCHAR(32) NULL DEFAULT NULL, cvv VARCHAR(10) NULL DEFAULT NULL, billingZip VARCHAR(10) NULL DEFAULT NULL)"
    )
  }
  )
  .catch((err) => console.log(err));

module.exports = db;
