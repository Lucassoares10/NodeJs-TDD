const faker = require("faker");
const { factory } = require("factory-girl");
const { User } = require("../src/app/models");


//esse faker.. gera dados ficticios, usados para testar a aplicação
factory.define("User", User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password()
});

module.exports = factory;
