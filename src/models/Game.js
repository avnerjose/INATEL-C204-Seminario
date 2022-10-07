const { v4: uuid } = require("uuid");

class Game {
  constructor(name, price, platform, description, gender, company) {
    this.name = name;
    this.price = price;
    this.platform = platform;
    this.description = description;
    this.gender = gender;
    this.company = company;

    if (!this.id) {
      this.id = uuid();
    }

    if (!this.created_at) {
      this.created_at = new Date();
    }
  }
}

module.exports = { Game };
