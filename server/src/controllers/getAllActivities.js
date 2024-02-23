const { Activity, Country } = require("../db.js");

const getAllActivities = async () =>
  await Activity.findAll({
    include: [
      {
        model: Country,
        as: "Countries",
        attributes: ["nombre"],
        through: { attributes: [] },
      },
    ],
  });

module.exports = { getAllActivities };
