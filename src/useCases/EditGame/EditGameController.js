class EditGameController {
  constructor(editGameUseCase) {
    this.editGameUseCase = this.editGameUseCase;
  }

  handle(req, res) {
    const { id } = req.params;

    const game = this.editGameUseCase.execute(id, req.body);

    return res.json(game);
  }
}

module.exports = {
  EditGameController,
};
