// require the library
const mongoose = require("mongoose");

// connecting to the database
mongoose.connect(
  "mongodb://localhost:27017/Question_API"
);

//acquire the connection to check if it is succesfull
const db = mongoose.connection;

// checking the error
db.on("error", console.error.bind(console, "error in connecting the database"));

// up and running then print the statement
db.once("open", function () {
  console.log("successfully connected to database");
});

// exporting a db
module.exports = db;
