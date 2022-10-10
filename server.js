const express = require("express");
const {
  createGameController,
} = require("./src/useCases/CreateGameController/index");
const { deleteGameController } = require("./src/useCases/DeleteGameController");
const { editGameController } = require("./src/useCases/EditGameController");
const {
  listGamesController,
} = require("./src/useCases/ListGamesController");

const app = express();

app.listen(3333);
app.use(express.json());


app.get("/games", (req, res) => listGamesController.handle(req, res));

app.post("/games", (req, res) => createGameController.handle(req, res));

app.delete("/games/:id", (req, res) => deleteGameController.handle(req, res));

app.put("/games/:id", (req, res) => editGameController.handle(req, res));
