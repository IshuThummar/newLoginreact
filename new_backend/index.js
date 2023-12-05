const express = require("express");
const app = express();
app.get("/", (req, res) => {
  console.log("hello ,,,,,,,,");
});
require("dotenv").config();
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`app is running in "http://localhost/${PORT} `);
});
