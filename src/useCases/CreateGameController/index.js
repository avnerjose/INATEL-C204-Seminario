const { GamesRepository } = require("../../repositories/GamesRepository");
const { CreateGameController } = require("./CreateGameController");
const { CreateGameUseCase } = require("./CreateGameUseCase");

const gamesRepository = GamesRepository.getInstance();
const createGameUseCase = new CreateGameUseCase(gamesRepository);
const createGameController = new CreateGameController(createGameUseCase);

module.exports = { createGameController };
