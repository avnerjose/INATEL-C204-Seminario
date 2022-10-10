const { Game } = require("../models/Game");
const { GamesRepository } = require("./GamesRepository");

describe("GamesRepository", () => {
  let gamesRepository;
  const mockedGame = {
    name: "Mocked name",
    price: 100,
    platform: "Mocked Platform",
    description: "Mocked Description",
    gender: "Mocked Gender",
    company: "Mocked company",
  };

  beforeEach(() => {
    gamesRepository = new GamesRepository();
  });

  it("should be able to create a game", () => {
    const resultGame = gamesRepository.create(mockedGame);

    expect(gamesRepository.list()).toHaveLength(1);
    expect(gamesRepository.list()[0]).toBeInstanceOf(Game);
    expect(gamesRepository.list()[0]).toEqual(
      expect.objectContaining(mockedGame)
    );
    expect(resultGame).toEqual(expect.objectContaining(mockedGame));
  });

  it("should be able to find a game by name", () => {
    const createdGame = gamesRepository.create(mockedGame);
    const foundGame = gamesRepository.findByName(createdGame.name);

    expect(foundGame).toEqual(createdGame);
  });

  it("should be able to find a game by id", () => {
    const createdGame = gamesRepository.create(mockedGame);
    const foundGame = gamesRepository.findByID(createdGame.id);

    expect(foundGame).toEqual(createdGame);
  });
});
