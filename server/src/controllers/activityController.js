const createActivities = async (
  nombre,
  dificultad,
  duracion,
  estacion,
  countries
) => {
  try {
    const newActivity = await Activity.create({
      nombre,
      dificultad,
      duracion,
      estacion,
      countries,
    });
    if (countries.length > 0) {
      const encontrarPaises = await Country.findAll({
        where: {
          id: countries,
        },
      });
      await newActivity.setCountries(encontrarPaises);
    }
    return newActivity;
  } catch (error) {
    throw new Error("No se pudo crear la actividad");
  }
};

async function getActivities(){

try {
  const activities = await Activity.findAll();
  if (activities.length === 0) {
    return "No hay actividades creadas";
  }
  return activities;
} catch (error) {
  
}
}

module.exports={
createActivities,
getActivities
}