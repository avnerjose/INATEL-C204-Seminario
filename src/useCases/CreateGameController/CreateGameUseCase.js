class CreateGameUseCase {
  constructor(gamesRepository) {
    this.gamesRepository = gamesRepository;
  }

  execute(payload) {
    const { name, price, platform, description, gender, company } = payload;

    const gameExist = this.gamesRepository.findByName(name);

    if (gameExist) {
      throw new Error("Game já existe");
    }

    const game = this.gamesRepository.create({
      name,
      price,
      platform,
      description,
      gender,
      company,
    });

    return game;
  }
}

module.exports = {
  CreateGameUseCase,
};
