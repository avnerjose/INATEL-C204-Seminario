const { GamesRepository } = require("../../repositories/GamesRepository");
const { ListGamesUseCases } = require("./ListGamesUseCase/")
const { ListGamesController } = require("../ListGamesController/ListGamesController");

const gamesRepository = GamesRepository.getInstance();
const listGamesUseCases = new ListGamesUseCases(gamesRepository);
const listGamesController = new ListGamesController(listGamesUseCases);

module.exports = { listGamesController };
