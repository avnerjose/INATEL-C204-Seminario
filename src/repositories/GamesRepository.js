const { Game } = require("../models/Game");

class GamesRepository {
  games = [];
  static INSTANCE;

  static getInstance() {
    if (!GamesRepository.INSTANCE) {
      GamesRepository.INSTANCE = new GamesRepository();
    }

    return GamesRepository.INSTANCE;
  }

  create({ name, price, platform, description, gender, company }) {
    const game = new Game(name, price, platform, description, gender, company);

    this.games.push(game);

    return game;
  }

  list() {
    return this.games;
  }

  delete(id) {
    this.games = this.games.filter((game) => game.id !== id);

    return this.games;
  }

  edit(id, payload) {
    const gamePosition = this.games.findIndex((game) => game.id === id);
    this.games[gamePosition] = {
      ...this.games[gamePosition],
      ...payload,
    };

    return this.games[gamePosition];
  }

  findByName(name) {
    return this.games.find((game) => game.name === name);
  }

  findByID(id) {
    return this.games.find((game) => game.id === id);
  }
}

module.exports = { GamesRepository };
