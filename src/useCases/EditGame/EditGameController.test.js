const { GamesRepository } = require("../../repositories/GamesRepository");
const { EditGameUseCase } = require("./EditGameUseCase");
const { EditGameController } = require("./EditGameController");

jest.mock("uuid", () => {
  return {
    v4: jest.fn().mockReturnValue("mocked-id"),
  };
});

describe("DeleteGameController", () => {
  let gamesRepository;
  let editGameUseCase;
  let editGameController;
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

  const mockedEditedGame = {
    name: "Edited mocked name",
    price: 101,
    platform: "Edited Mocked Platform",
    description: "Edited Mocked Description",
    gender: "Edited Mocked Gender",
    company: "Edited Mocked Company",
  };

  beforeEach(() => {
    gamesRepository = new GamesRepository();
    editGameUseCase = new EditGameUseCase(gamesRepository);
    editGameController = new EditGameController(editGameUseCase);
  });

  beforeAll(() => {
    res = {
      status,
      json,
    };

    req = {
      params: { id: "mocked-id" },
      body: mockedEditedGame,
    };
  });

  it("should be able to delete a game", () => {
    gamesRepository.create(mockedGame);
    editGameController.handle(req, res);

    expect(status).toHaveBeenCalledWith(204);
    expect(json).toHaveBeenCalledWith(
      expect.objectContaining(mockedEditedGame)
    );
  });

  it("should not be able to delete a game that doesn't exist", () => {
    editGameController.handle(req, res);

    expect(status).toHaveBeenCalledWith(404);
    expect(json).toHaveBeenCalledWith({
      error: "Game não existe",
    });
  });
});
