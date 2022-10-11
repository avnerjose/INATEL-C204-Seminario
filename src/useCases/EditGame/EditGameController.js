class EditGameController {
  constructor(editGameUseCase) {
    this.editGameUseCase = editGameUseCase;
  }

  handle(req, res) {
    const { id } = req.params;

    try {
      const game = this.editGameUseCase.execute(id, req.body);

      return res.status(204).json(game);
    } catch (e) {
      return res.status(404).json({ error: e.message });
    }
  }
}

module.exports = {
  EditGameController,
};
