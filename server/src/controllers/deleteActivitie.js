const { Activity } = require("../db");

const deleteActivity = async (nombre) => {
  try {
    // Busca la actividad por su nombre
    const activity = await Activity.findOne({ where: { nombre } });

    // Verifica si se encontró la actividad
    if (!activity) {
      throw new Error("No se encontraron actividades con ese nombre");
    }

    // Elimina la actividad
    await activity.destroy();

    // Retorna las actividades actualizadas después de la eliminación
    const activities = await Activity.findAll();
    return activities;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {deleteActivity};
