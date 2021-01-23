const express = require("express");
const port = 8000;
const app = express();
const db = require("./config/mongoose");

app.listen(port, (err) => {
  if (err) {
    console.log("Error in connecting server", err);
  }
  console.log("Connected to the server");
});
