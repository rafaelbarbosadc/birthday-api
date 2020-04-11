const express = require("express");
const routes = express.Router();
const MessageController = require("./controllers/Message");

routes.post("/messages", MessageController.create);
routes.get("/messages", MessageController.list);
routes.get("/messages/:_id", MessageController.show);
routes.delete("/messages/:_id", MessageController.delete);

module.exports = routes;
