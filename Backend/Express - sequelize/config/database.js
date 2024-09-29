const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("users", "root", "manihi10", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
