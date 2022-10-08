const { GamesRepository } = require("../../repositories/GamesRepository");
const { DeleteGameController } = require("./DeleteGameController");
const { DeleteGameUseCase } = require("./DeleteGameUseCase");

const gamesRepository = GamesRepository.getInstance();
const DeleteGameUseCase = new DeleteGameUseCase(gamesRepository);
const deleteGameController = new DeleteGameController(gamesRepository);

module.exports = { deleteGameController };
