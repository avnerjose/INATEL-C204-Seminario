const { GamesRepository } = require("../../repositories/GamesRepository");
const { ListGamesUseCase } = require("./ListGamesUseCase");
const { ListGamesController } = require("./ListGamesController");
const { CreateGameUseCase } = require("../CreateGame/CreateGameUseCase");
const { CreateGameController } = require("../CreateGame/CreateGameController");
const { DeleteGameUseCase } = require("../DeleteGame/DeleteGameUseCase");
const { DeleteGameController } = require("../DeleteGame/DeleteGameController");


describe("ListGamesController", () => {
  let gamesRepository;
  let listGamesUseCase;
  let listGamesController;
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
    listGamesUseCase = new ListGamesUseCase(gamesRepository);
    listGamesController = new ListGamesController(listGamesUseCase);
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

  it("should return an empty list", () => {
    listGamesController.handle(req, res);

    expect(status).toHaveBeenCalledWith(200);
    expect(json).toHaveLength(0);
  });

  //List deve conter um elemento, sendo o jogo que foi criado
  it("should return a list with the created element", () => {
    createGameUseCase = new CreateGameUseCase(gamesRepository);
    createGameController = new CreateGameController(createGameUseCase);

    createGameController.handle(req, res);
    listGamesController.handle(req,res);

    expect(status).toHaveBeenCalledWith(200);
    expect(json).toHaveBeenCalledWith(expect.objectContaining(mockedGame));
  });

  //Lista deve ser vazia após criar um jogo e deletá-lo
  it("should return a empty list after delete the only game that exists", () => {
    createGameUseCase = new CreateGameUseCase(gamesRepository);
    createGameController = new CreateGameController(createGameUseCase);
    deleteGameUseCase = new DeleteGameUseCase(gamesRepository);
    deleteGameController = new DeleteGameController(deleteGameUseCase);

    req = {
        params: { id: "mocked-id" },
        body: mockedGame,
    };

    createGameController.handle(req, res);
    deleteGameController.handle(req,res);
    listGamesController.handle(req,res);

    expect(status).toHaveBeenCalledWith(200);
    expect(json).toHaveLength(0);
    expect(json).toHaveBeenCalledWith(expect.not.objectContaining(mockedGame));
  });
});
