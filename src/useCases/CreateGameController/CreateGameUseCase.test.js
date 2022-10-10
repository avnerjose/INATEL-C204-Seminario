const { Game } = require("../../models/Game");
const { GamesRepository } = require("../../repositories/GamesRepository");
const { CreateGameUseCase } = require("./CreateGameUseCase");

//O describe serve para unir testes de um mesma classe em um único contexto
describe("CreateGameUseCase", () => {
  let gamesRepository;
  let createGameUseCase;
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
    createGameUseCase = new CreateGameUseCase(gamesRepository);
  });

  it("should be able to create a game", () => {
    const resultGame = createGameUseCase.execute(mockedGame);

    expect(gamesRepository.list()).toHaveLength(1);
    expect(gamesRepository.list()[0]).toBeInstanceOf(Game);
    expect(gamesRepository.list()[0]).toEqual(
      expect.objectContaining(mockedGame)
    );
    expect(resultGame).toEqual(expect.objectContaining(mockedGame));
  });

  it("should not be able to create a test with a name already taken", () => {
    createGameUseCase.execute(mockedGame);

    expect(() => {
      createGameUseCase.execute(mockedGame);
    }).toThrow();
  });
});
