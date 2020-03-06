const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Starting app
const app = express();
app.use(express.json());

// Connecting with DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
requireDir("./src/models");

// Routes
app.use("/api", require("./src/routes"));

// Starting web server
app.listen(3001);
