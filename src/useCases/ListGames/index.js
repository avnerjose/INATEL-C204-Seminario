const { GamesRepository } = require("../../repositories/GamesRepository");
const { ListGamesUseCase } = require("./ListGamesUseCase");
const { ListGamesController } = require("./ListGamesController");

const gamesRepository = GamesRepository.getInstance();
const listGamesUseCase = new ListGamesUseCase(gamesRepository);
const listGamesController = new ListGamesController(listGamesUseCases);

module.exports = { listGamesController };
