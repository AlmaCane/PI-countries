const { createActivity } = require("../controllers/createActivity");
const { getAllActivities } = require("../controllers/getAllActivities");

const postActivity = async (req, res) => {
  const { nombre, dificultad, duracion, estacion, countries } = req.body;

  try {
    const response = await createActivity(
      nombre,
      dificultad,
      duracion,
      estacion,
      countries
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getActivities = async (req, res) => {
  const response = await getAllActivities();
  res.status(200).json(response);
};

module.exports = { postActivity, getActivities };
