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
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS sessions (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,        sessionid INTEGER NOT NULL UNIQUE, name MEDIUMTEXT NULL DEFAULT NULL, email MEDIUMTEXT NULL DEFAULT NULL, password MEDIUMTEXT NULL DEFAULT NULL, addressLine1 MEDIUMTEXT NULL DEFAULT NULL, addressLine2 MEDIUMTEXT NULL DEFAULT NULL, city MEDIUMTEXT NULL DEFAULT NULL,        state MEDIUMTEXT NULL DEFAULT NULL, zip MEDIUMTEXT NULL DEFAULT NULL, cvv MEDIUMTEXT NULL DEFAULT NULL, billingZip MEDIUMTEXT NULL DEFAULT NULL)"
    )
  )
  .catch((err) => console.log(err));

module.exports = db;
