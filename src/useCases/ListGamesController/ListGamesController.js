class ListGamesController {
  constructor(gamesRepository) {
    this.gamesRepository = gamesRepository;
  }

  handle(req, res) {
    const games = this.gamesRepository.list();

    return res.json(games);
  }
}

module.exports = {
  ListGamesController,
};
