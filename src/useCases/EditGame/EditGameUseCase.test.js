const { Game } = require("../../models/Game");
const { GamesRepository } = require("../../repositories/GamesRepository");
const { EditGameUseCase } = require("./EditGameUseCase");
//O describe serve para unir testes de um mesma classe em um único contexto
describe("EditGameUseCase", () => {
  let gamesRepository;
  let editGameUseCase;
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
    //Antes de cada teste instancia os objetos e aplica a injeção de dependência
    gamesRepository = new GamesRepository();
    editGameUseCase = new EditGameUseCase(gamesRepository);
  });

  //Cada teste unitário é um "it" ou um "test"
  it("should be able to edit a game", () => {
    const game = gamesRepository.create(mockedGame);

    const resultGame = editGameUseCase.execute(game.id, mockedEditedGame);
    
    expect(resultGame).toEqual(expect.objectContaining(mockedEditedGame));
  });

  it("should not be able to edit a game that not exists", () => {
    gamesRepository.create(mockedGame);

    expect(() => {editGameUseCase.execute('não existe', mockedEditedGame)} ).toThrow();
  });
});
