const { GamesRepository } = require("../../repositories/GamesRepository");
const { ListGamesController } = require("./ListGamesController");

const gamesRepository = GamesRepository.getInstance();
const listGamesController = new ListGamesController(gamesRepository);

module.exports = { listGamesController };
