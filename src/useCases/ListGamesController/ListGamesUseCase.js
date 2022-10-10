class ListGamesUseCase {
    constructor(gamesRepository) {
        this.gamesRepository = gamesRepository;
    }

    execute(){
        const allGames = this.gamesRepository.list();

        return allGames;
    }
}

module.exports = {
    ListGamesUseCase,
};