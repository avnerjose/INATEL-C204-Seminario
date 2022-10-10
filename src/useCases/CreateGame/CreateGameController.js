class CreateGameController {
  constructor(createGameUseCase) {
    this.createGameUseCase = createGameUseCase;
  }

  handle(req, res) {
    const { name, price, platform, description, gender, company } = req.body;

    try {
      const game = this.createGameUseCase.execute({
        name,
        price,
        platform,
        description,
        gender,
        company,
      });

      return res.status(201).json(game);
    } catch (e) {
      return res.status(409).json({
        error: e.message,
      });
    }
  }
}

module.exports = {
  CreateGameController,
};
