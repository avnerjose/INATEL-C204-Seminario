class EditGameUseCase {
    constructor(gamesRepository) {
      this.gamesRepository = gamesRepository;
    }
  
    execute(id, payload) {
      const gameExist = this.gamesRepository.findByID(id);

      if (!gameExist) {
        throw new Error( "Game não existe");
      }
  
      const game = this.gamesRepository.edit(id, payload);

      return game;
    }
}
  module.exports = {
    EditGameUseCase,
  };
  