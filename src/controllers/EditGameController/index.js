const { GamesRepository } = require("../../repositories/GamesRepository");
const { EditGameController } = require("./EditGameController");

const gamesRepository = GamesRepository.getInstance();
const editGameController = new EditGameController(gamesRepository);

module.exports = { editGameController };
