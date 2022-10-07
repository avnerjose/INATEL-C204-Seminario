class CreateGameController {
  constructor(gamesRepository) {
    this.gamesRepository = gamesRepository;
  }

  handle(req, res) {
    const { name, price, platform, description, gender, company } = req.body;

    const gameExist = this.gamesRepository.findByName(name);

    if (gameExist) {
      return res.status(409).json({
        message: "Game already exist",
      });
    }

    const game = this.gamesRepository.create({
      name,
      price,
      platform,
      description,
      gender,
      company,
    });

    return res.status(201).json(game);
  }
}

module.exports = {
  CreateGameController,
};
