class ListGamesController {
  constructor(listGamesUseCases) {
    this.listGamesUseCases = listGamesUseCases;
  }

  handle(req, res) {
    const games = this.listGamesUseCases.execute();

    return res.json(games);
  }
}

module.exports = {
  ListGamesController,
};
