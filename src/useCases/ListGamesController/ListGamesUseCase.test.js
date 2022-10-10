const { Game } = require("../../models/Game");
const { GamesRepository } = require("../../repositories/GamesRepository");
const { ListGamesUseCase } = require("./ListGamesUseCase");

describe("ListGamesUseCase", () => {
  let gamesRepository;
  let listGamesUseCase;

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
    listGamesUseCase = new ListGamesUseCase(gamesRepository);
  });

  //Teste nenhum jogo ainda cadastrado
  it("should return an empty list", () => {
    const result = listGamesUseCase.execute();

    expect(gamesRepository.list()).toHaveLength(0);
  });

  //Teste com um jogo já cadastrado
  it("should return a list with the created element", () => {
    const allGames = listGamesUseCase.execute();
    gamesRepository.create(mockedGame);

    expect(gamesRepository.list()).toHaveLength(1);
    expect(gamesRepository.list()[0]).toBeInstanceOf(Game);
    expect(allGames[0]).toEqual(expect.objectContaining(mockedGame));
  });
})