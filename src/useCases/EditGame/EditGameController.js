class EditGameController {
  constructor(editGameUseCase) {
    this.editGameUseCase = editGameUseCase;
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
