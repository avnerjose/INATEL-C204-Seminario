const { GamesRepository } = require("../../repositories/GamesRepository");
const { CreateGameUseCase } = require("./CreateGameUseCase");
const { CreateGameController } = require("./CreateGameController");

describe("CreateGameController", () => {
  let gamesRepository;
  let createGameUseCase;
  let createGameController;
  let req, res;
  let status = jest.fn().mockImplementation(() => res);
  let json = jest.fn();

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
    createGameController = new CreateGameController(createGameUseCase);
  });

  beforeAll(() => {
    res = {
      status,
      json,
    };

    req = {
      body: mockedGame,
    };
  });

  it("should be able to create a game", () => {
    createGameController.handle(req, res);

    expect(status).toHaveBeenCalledWith(201);
    expect(json).toHaveBeenCalledWith(expect.objectContaining(mockedGame));
  });

  it("should not be able to create a game with same name", () => {
    createGameController.handle(req, res);
    createGameController.handle(req, res);

    expect(status).toHaveBeenCalledWith(409);
    expect(json).toHaveBeenCalledWith({
      error: "Game já existe",
    });
  });
});
