const { Country , Activity} = require("../db.js");
const { Op } = require("sequelize");

const countryByName = async (nombre) => {
  const lowerName = nombre.toLowerCase();
  let coincidencias = await Country.findAll({
    where: { nombre: { [Op.iLike]: `%${lowerName}%` } },
    include: [
      {
        model: Activity,
        as: "Activities",
        attributes: ["nombre"],
        through: { attributes: [] },
      },
    ],
  });
  if (coincidencias.length === 0) {
    coincidencias = "No existen países con esa coincidencia";
  }
  return coincidencias;
};

module.exports = { countryByName };
