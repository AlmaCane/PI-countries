const { Country, Activity } = require("../db.js");

const countryById = async (id) =>
 {
  try {
    const country= await Country.findOne({
    where: { id: id.toUpperCase() },
    include: [
      {
        model: Activity,
        as: "Activities",
        attributes: ["nombre", "estacion"],
        through: { attributes: [] },
      },
    ],
  });
  return country

}
catch(err){console.log(err.message)}
}

module.exports = { countryById };
