const { createActivity } = require("../controllers/createActivity");
const { getAllActivities } = require("../controllers/getAllActivities");
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

module.exports = { postActivity, getActivities };
