const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Starting app
const app = express();

// Connecting with DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
requireDir("./src/models");

// First route
app.get("/", (req, res) => {
  return res.send("Hello Rocketseat");
});

// Starting web server
app.listen(3001);
