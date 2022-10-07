const { GamesRepository } = require("../../repositories/GamesRepository");
const { DeleteGameController } = require("./DeleteGameController");

const gamesRepository = GamesRepository.getInstance();
const deleteGameController = new DeleteGameController(gamesRepository);

module.exports = { deleteGameController };
