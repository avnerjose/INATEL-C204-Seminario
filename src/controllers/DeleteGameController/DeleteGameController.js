class DeleteGameController {
  constructor(gamesRepository) {
    this.gamesRepository = gamesRepository;
  }

  handle(req, res) {
    const { id } = req.params;

    const gameExist = this.gamesRepository.findByID(id);

    if (!gameExist) {
      return res.status(404).json({
        message: "Game não existe",
      });
    }

    const games = this.gamesRepository.delete(id);

    return res.json(games);
  }
}

module.exports = {
  DeleteGameController,
};
