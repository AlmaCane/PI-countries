const { DataTypes } = require("sequelize");

// Definimos el modelo Country utilizando Sequelize
const Country = (sequelize) => {
  sequelize.define(
    "Country",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      id: {
        type: DataTypes.CHAR(3),
        validate: { len: [3, 3] },
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      continente: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      poblacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      subregion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      area: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};

// Exportamos el modelo Country
module.exports = Country;
