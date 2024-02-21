const {Country} = require("./src/db")
const axios = require("axios");

async function saveInfo() {
  try {
    const { data } = await axios("http://localhost:5000/countries");
  
    for (let country of data) {
      await Country.create({
        id: country.cca3,
        nombre: country.name.common,
        imagen: country.flags.svg,
        continente: country.region,
        capital: country.capital?.[0],
        area: country.area,
        subregion: country.subregion,
        poblacion: country.population,
      });
    }
  
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = saveInfo;
