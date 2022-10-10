class DeleteGameController {
  constructor(deleteGameUseCase) {
    this.deleteGameUseCase = deleteGameUseCase;
  }

  handle(req, res) {
    const { id } = req.params;

    try {
      const games = this.deleteGameUseCase.execute(id);

      return res.status(201).json(games);
    } catch (e) {
      return res.status(409).json({
        error: e.message,
      });
    }
  }
}

module.exports = {
  DeleteGameController,
};
