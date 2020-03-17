const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const mongodbHost = process.env.MONGODB_HOST || "localhost:27017";
const database = process.env.MONGODB_DATABASE || "nodeapi";

// Starting app
const app = express();
app.use(express.json());
app.use(cors());

// Connecting with DB
mongoose.connect(`mongodb://${mongodbHost}/${database}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
requireDir("./src/models");

// Routes
app.use("/api", require("./src/routes"));

// Starting web server
app.listen(3001);
