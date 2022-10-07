const { GamesRepository } = require("../../repositories/GamesRepository");
const { CreateGameController } = require("./CreateGameController");

const gamesRepository = GamesRepository.getInstance();
const createGameController = new CreateGameController(gamesRepository);

module.exports = { createGameController };
