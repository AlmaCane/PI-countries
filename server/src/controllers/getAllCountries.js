const { Country, Activity } = require("../db.js");

const getAllCountries = async () =>
  await Country.findAll({
    include: [
      {
        model: Activity,
        as: "Activities",
        attributes: ["nombre"],
        through: { attributes: [] },
      },
    ],
  });

module.exports = { getAllCountries };
