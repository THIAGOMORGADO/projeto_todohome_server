const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("tobehome_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
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
