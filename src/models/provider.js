const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const User = require("./accounts");

const Provider = sequelize.define("provider", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  provider: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  creci: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rg: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cnpj: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Provider.belongsTo(User, { foreignKey: "user_id" });
Provider.sync({ force: true });

module.exports = Provider;
