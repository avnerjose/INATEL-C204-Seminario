const { GamesRepository } = require("../../repositories/GamesRepository");
const { EditGameController } = require("./EditGameController");
const { EditGameUseCase } = require("./EditGameUseCase");

const gamesRepository = GamesRepository.getInstance();
const editGameUseCase = new EditGameUseCase(gamesRepository);
const editGameController = new EditGameController(editGameUseCase);

module.exports = { editGameController };
