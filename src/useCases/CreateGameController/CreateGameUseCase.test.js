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
    //Antes de cada teste instancia os objetos e aplica a injeção de dependência
    gamesRepository = new GamesRepository();
    createGameUseCase = new CreateGameUseCase(gamesRepository);
  });

  //Cada teste unitário é um "it" ou um "test"
  it("should be able to create a game", () => {
    const resultGame = createGameUseCase.execute(mockedGame); //Execute a criação do game

    expect(gamesRepository.list()).toHaveLength(1); //A lista de games deveria ter 1 de tamanho
    expect(gamesRepository.list()[0]).toBeInstanceOf(Game); //O game criado deve ser uma instância da classe Game
    expect(gamesRepository.list()[0]).toEqual(
      expect.objectContaining(mockedGame)
    ); //O game criado deve ter os dados mockados passados na criação
    expect(resultGame).toEqual(expect.objectContaining(mockedGame));
  });

  it("should not be able to create a test with a name already taken", () => {
    createGameUseCase.execute(mockedGame); //Cria um game

    expect(() => {
      createGameUseCase.execute(mockedGame); //Tenta criar um outro game com o mesmo nome
    }).toThrow(); //Espera que uma exceção seja lançada
  });
});
