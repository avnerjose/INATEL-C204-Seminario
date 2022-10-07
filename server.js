const express = require("express");
const { v4: uuid } = require("uuid");

const app = express();

app.listen(3333);
app.use(express.json());

let games = [];

app.get("/games", (req, res) => {
  return res.json(games);
});

app.post("/games", (req, res) => {
  const { name, price, platform, description, gender, company } = req.body;

  const gameExist = games.find((game) => game.name === name);

  if (gameExist) {
    return res.status(400).json({
      message: "Game already exist",
    });
  }

  const game = {
    aidi: uuid(),
    name,
    price,
    platform,
    description,
    gender,
    company,
    created_at: new Date(),
  };

  games.push(game);

  return res.json(game);
});

app.delete("/games/:aidi", (req, res) => {
  const { aidi } = req.params;

  const gameExist = games.find((game) => game.aidi === aidi);

  if (!gameExist) {
    return res.status(404).json({
      message: "Game não existe",
    });
  }

  games = games.filter((game) => game.aidi !== aidi);

  return res.json(games);
});

app.put("/games/:aidi", (req, res) => {
  const { aidi } = req.params;

  const gameExist = games.find((game) => game.aidi === aidi);

  if (!gameExist) {
    return res.status(404).json({
      message: "Game não existe",
    });
  }

  gamePosition = games.findIndex((game) => game.aidi === aidi);
  games[gamePosition] = {
    ...games[gamePosition],
    ...req.body,
  };

  return res.json(games[gamePosition]);
});
