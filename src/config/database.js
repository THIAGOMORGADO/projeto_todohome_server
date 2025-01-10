const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("db_tobehome", "postgres", "docker", {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to Sequelize on database...");
  })
  .catch((err) => {
    console.log(err, "Not connected is database connection");
  });

module.exports = sequelize;
