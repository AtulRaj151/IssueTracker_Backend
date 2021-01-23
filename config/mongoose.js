const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/issuetracker");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in connecting the database"));

db.once("open", () => {
  console.log("Connected to the mongodb");
});
