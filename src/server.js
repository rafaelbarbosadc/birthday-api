const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const mongoConfig = require("../config/mongo");

class App {
  constructor() {
    this.express = express();
    this.middlewares();
    this.database();
    this.routes();
  }

  database() {
    mongoose.connect(mongoConfig.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new App().express;
