const { Activity } = require("../db");

const editActivity = async (nombre, nuevosDatos) => {
  try {
    const activityToEdit = await Activity.findOne({ where: { nombre } });
    if (activityToEdit) {
      activityToEdit.nombre = nuevosDatos.nombre || activityToEdit.nombre;
      activityToEdit.estacion = nuevosDatos.estacion || activityToEdit.estacion;
      activityToEdit.duracion = nuevosDatos.duracion || activityToEdit.duracion;
      activityToEdit.dificultad = nuevosDatos.dificultad || activityToEdit.dificultad;
      activityToEdit.countries = nuevosDatos.countries || activityToEdit.countries;
      await activityToEdit.save();
      return activityToEdit;
    } else {
      throw new Error('No se encontró ninguna actividad con el nombre especificado');
    }
  } catch (error) {
    throw error; // Lanza el error para que el código que llama a editActivity pueda manejarlo
  }
};

module.exports= editActivity;