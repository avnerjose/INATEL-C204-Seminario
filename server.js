const express = require("express");
const {
  createGameController,
} = require("./src/controllers/CreateGameController/index");
const { deleteGameController } = require("./src/controllers/DeleteGameController");
const { editGameController } = require("./src/controllers/EditGameController");
const {
  listGamesController,
} = require("./src/controllers/ListGamesController");

const app = express();

app.listen(3333);
app.use(express.json());


app.get("/games", (req, res) => listGamesController.handle(req, res));

app.post("/games", (req, res) => createGameController.handle(req, res));

app.delete("/games/:id", (req, res) => deleteGameController.handle(req, res));

app.put("/games/:id", (req, res) => editGameController.handle(req, res));
