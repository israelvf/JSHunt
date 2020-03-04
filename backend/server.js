const express = require("express");
const mongoose = require("mongoose");

// Starting app
const app = express();

// Connecting with DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// First route
app.get("/", (req, res) => {
  res.send("Hello Rocketseat");
});

// Starting web server
app.listen(3001);
