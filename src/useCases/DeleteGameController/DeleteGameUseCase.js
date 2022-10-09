class DeleteGameUseCase {
    constructor(gamesRepository) {
      this.gamesRepository = gamesRepository;
    }
  
    execute(ID) {
      const { id } = ID;
  
      const gameExist = this.gamesRepository.findByID(id);
  
      if (!gameExist) {
        throw new Error("Game não existe");
      }
  
      const games = this.gamesRepository.delete(id);
  
      return games;
    }
  }
  
  module.exports = {
    DeleteGameUseCase,
  };
  