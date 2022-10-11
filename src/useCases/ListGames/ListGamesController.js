class ListGamesController {
  constructor(listGamesUseCase) {
    this.listGamesUseCase = listGamesUseCase;
  }

  handle(req, res) {
    const games = this.listGamesUseCase.execute();

    return res.status(200).json(games);
  }
}

module.exports = {
  ListGamesController,
};
