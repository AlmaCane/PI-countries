const {idController, getCountryController, nombreController}= require("../controllers/countryController")

async function getCountryID(req, res) {
    const { id } = req.params;
    
   try {
    const response = await idController(id);
     return res.json(response);
  } catch (err) {
     return res.status(500).send(err.message);
   }
}
async function getAllCountries (req, res){

try {
    const countries = getCountryController();
     if (countries.length === 0)return res.status(404).send("No se ecnontraron paises")
     return res.json(countries);
} catch (error) {
    return res.status(500).send(error.message)
    
}
}

async function getCountryName(req, res){
 const {nombre} = req.query
  try{
    const pais = await nombreController(nombre);    
if(!pais){ return res.status(404).send("No se encontró un pais con ese nombre")
    }
  return res.json(pais)

 } catch (err) {
    return res.status(500).send(err.message);
  }


}

module.exports= {
getCountryID, 
getCountryName,
getAllCountries
}