const { countryById } = require("../controllers/countryByID.js");
const { getAllCountries } = require("../controllers/getAllCountries.js");
const { countryByName } = require("../controllers/countryByName.js");

const getCountries = async (req, res) => {
  const { nombre } = req.query;
  try {
    if (nombre) {
      const response = await countryByName(nombre);
      res.status(200).json(response);
    } else {
      const response = await getAllCountries();
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCountryId = async (req, res) => {
  const { id } = req.params;
  if (!id)return res.status(400).send("Faltan datos")
  try {
    const response = await countryById(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json( error.message );
  }
};

module.exports = {
  getCountries,
  getCountryId,
};
