const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego lo conectamos a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Activity",
    {
      id: {
        type: DataTypes.INTEGER, //UUID codigo alfanumerico
        autoIncrement: true, //defaultValue: datatypes.uuidv4
        primaryKey: true,
      },

      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      dificultad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5,
        },
      },

      duracion: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      estacion: {
        type: DataTypes.ENUM("Verano", "Otoño", "Primavera", "Invierno"),
        allowNull: false,
      },
    },
    { timeStamps: false }
  );
};
