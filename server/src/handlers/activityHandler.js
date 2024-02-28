const { createActivity } = require("../controllers/createActivity");
const { getAllActivities } = require("../controllers/getAllActivities");
const {deleteActivity} = require ("../controllers/deleteActivitie");
const editActivity = require("../controllers/editActivity");
const postActivity = async (req, res) => {
  const { nombre, dificultad, duracion, estacion, countries } = req.body;

  try {
    if (!nombre || !dificultad || !estacion || !Array.isArray(countries) || countries.length === 0)
      return res.status(400).send("Faltan datos");

    const response = await createActivity(nombre, dificultad, duracion, estacion, countries);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getActivities = async (req, res) => {
  const response = await getAllActivities();
  res.status(200).json(response);
};

const deleteAct = async (req, res) => {
  const { nombre } = req.params; 

  if (!nombre) {
    return res.status(404).send("Falta el nombre de la actividad en la solicitud");
  }

  try {
    const response = await deleteActivity(nombre);

    return res.json( response);

  } catch (error) {
    return res.status(400).send(error.message);
  }
}

const putActivity =async (req, res)=>{
const {nombre}= req.params;
const nuevosDatos= req.body;
try {
  const activity = await editActivity(nombre, nuevosDatos);
  res.status(200).json(activity);
} catch (error) {
  return res.status(500).send(error.message)
}
}

module.exports = { postActivity, getActivities, deleteAct, putActivity };
