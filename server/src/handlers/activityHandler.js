const {createActivities, getActivities} = require("../controllers/activityController")

const postActivities = async (req, res) => {
    const { nombre, dificultad, duracion, estacion, countries } = req.body;
    try {
      const activity = await createActivities(
        nombre, dificultad, duracion, estacion, countries
      );
      res.status(201).json(activity);
    } catch (error) {
      res.status(400).json(error.message);
    }
  };

const getAllActivities = async (req, res)=>{

    try {
        const activities = await getActivities();
        res.status(200).json(activities);
      }
  
     catch (error) {
        return res.status(500).send(err.message)
     }
}

  module.exports={
postActivities,
getAllActivities
}