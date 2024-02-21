const { Activity } = require("../db.js");

const createActivity = async (
  nombre,
  dificultad,
  duracion,
  estacion,
  countries
) => {
  const newActivity = await Activity.create({
    nombre,
    dificultad,
    duracion,
    estacion,
  });

  await newActivity.setCountries(countries);
  return newActivity;
};

module.exports = { createActivity };
