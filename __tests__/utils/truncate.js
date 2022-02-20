const { sequelize } = require("../../src/app/models");

//para percorrer todas as tabelas do banco e deletar todos os dados la de dentro
module.exports = () => {
  return Promise.all(
    Object.keys(sequelize.models).map(key => {
      return sequelize.models[key].destroy({ truncate: true, force: true });
    })
  );
};
