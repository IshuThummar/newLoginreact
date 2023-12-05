const mysql = require("mysql");
const db = (database) => {
  mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "mydb",
  });
  const connect = db.connect((error) => {
    if (error) {
      console.log("not connected");
    } else {
      console.log("Database connected");
    }
  });
  return connect;
};
module.exports = db;
