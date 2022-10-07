class EditGameController {
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

    const game = this.gamesRepository.edit(id, req.body);

    return res.json(game);
  }
}

module.exports = {
  EditGameController,
};
