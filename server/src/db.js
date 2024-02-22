require("dotenv").config();   //ejecutacion de dependencia dotenv que sirve para importar las credenciales
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;  //metodo de dotenv

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/countries`,
  {
    logging: false,
  }
);

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

// Aca vendrian las relaciones
const { Country, Activity } = sequelize.models;

Activity.belongsToMany(Country, { through: "ActivityCountry" });
Country.belongsToMany(Activity, { through: "ActivityCountry" });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
