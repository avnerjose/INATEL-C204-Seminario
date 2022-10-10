const { Game } = require("../../models/Game");
const { GamesRepository } = require("../../repositories/GamesRepository");
const { DeleteGameUseCase } = require("./DeleteGameUseCase");
//O describe serve para unir testes de um mesma classe em um único contexto
describe("DeleteGameUseCase", () => {
  let gamesRepository;
  let deleteGameUseCase;
  const mockedGame = {
    name: "Mocked name",
    price: 100,
    platform: "Mocked Platform",
    description: "Mocked Description",
    gender: "Mocked Gender",
    company: "Mocked company",
  };

  beforeEach(() => {
    //Antes de cada teste instancia os objetos e aplica a injeção de dependência
    gamesRepository = new GamesRepository();
    deleteGameUseCase = new DeleteGameUseCase(gamesRepository);
  });

  //Cada teste unitário é um "it" ou um "test"
  it("should be able to delete a game", () => {
    const game = gamesRepository.create(mockedGame); //Execute a criação do game
    deleteGameUseCase.execute(game.id); // Delete o jogo criado

    expect(gamesRepository.list()).toHaveLength(0); //A lista de games deveria estar vazia
  });

  it("should not be able to delete a game that doesn't exist", () => {
  
    expect(() => {
      deleteGameUseCase.execute("00000000"); //Tenta excluir um jogo não cadastrado
    }).toThrow(); //Espera que uma exceção seja lançada
  });
});
