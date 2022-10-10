const { GamesRepository } = require("../../repositories/GamesRepository");
const { DeleteGameUseCase } = require("./DeleteGameUseCase");
const { DeleteGameController } = require("./DeleteGameController");

jest.mock("uuid", () => {
  return { v4: jest.fn(() => "mocked-id") };
});

describe("DeleteGameController", () => {
  let gamesRepository;
  let deleteGameUseCase;
  let deleteGameController;
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
    deleteGameUseCase = new DeleteGameUseCase(gamesRepository);
    deleteGameController = new DeleteGameController(deleteGameUseCase);
  });

  beforeAll(() => {
    res = {
      status,
      json,
    };

    req = {
      params: { id: "mocked-id" },
    };
  });

  it("should be able to delete a game", () => {
    gamesRepository.create(mockedGame); // Criando um jogo
    deleteGameController.handle(req, res); //Deletar o jogo

    expect(status).toHaveBeenCalledWith(201);
    expect(json).toHaveBeenCalledWith([]);
  });

  it("should not be able to delete a game that doesn't exist", () => {
    deleteGameController.handle(req, res)

    expect(status).toHaveBeenCalledWith(409);
    expect(json).toHaveBeenCalledWith({
      error: "Game não existe",
    });
  });
});
