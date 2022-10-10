const { GamesRepository } = require("../../repositories/GamesRepository");
const { DeleteGameController } = require("./DeleteGameController");
const { DeleteGameUseCase } = require("./DeleteGameUseCase");

const gamesRepository = GamesRepository.getInstance();
const deleteGameUseCase = new DeleteGameUseCase(gamesRepository);
const deleteGameController = new DeleteGameController(deleteGameUseCase);

module.exports = { deleteGameController };
