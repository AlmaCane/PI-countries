const { Activity, Country } = require("../db.js");

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
    estacion
  });
 // Obtener el país (suponiendo que ya existe en la base de datos)
 const country = await Country.findAll({ where: { nombre: countries } });

 // Asignar el país a la actividad
 await newActivity.addCountries(country);

 return newActivity;
};

module.exports = { createActivity };
