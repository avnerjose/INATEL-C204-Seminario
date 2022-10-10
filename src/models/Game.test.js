const { Game } = require("./Game");

jest.mock("uuid", () => {
  return {
    v4: jest.fn(() => "Mocked Id"),
  };
});

describe("Game Model", () => {
  const mockedGame = {
    name: "Mocked name",
    price: 100,
    platform: "Mocked Platform",
    description: "Mocked Description",
    gender: "Mocked Gender",
    company: "Mocked company",
  };

  it("should be able to instantiate a game", () => {
    const { name, price, platform, description, gender, company } = mockedGame;
    const game = new Game(name, price, platform, description, gender, company);
    const date = new Date();

    expect(game).toBeInstanceOf(Game);
    expect(game.id).toMatch("Mocked Id");
    expect(game.created_at).toEqual(date);
    expect(game).toEqual(expect.objectContaining(mockedGame));
  });
});
