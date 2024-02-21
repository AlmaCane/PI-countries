const { Country } = require("../db");
const {Op} = require("sequelize")

const getCountryController = async () => {
  try {
    const allCountries = await Country.findAll();
    return allCountries;
  } catch (err) {
   throw new Error(err.message);
  }
};

const idController = async (id) => {

if (!id) throw new Error("Faltan datos");
if (id.length !== 3) throw new Error("El id debe tenr 3 caracteres")
try {  
    const country = await Country.findOne({
    where: { id: id.toUpperCase() },
  });
  if (!country) {
    throw new Error(`No se encontró un pais con ese id`);
  }
  return country;
    
} catch (error) {
    throw new Error("No se pudo buscar el país")
    
}

};

const nombreController = async (nombre) => {

if (!nombre) throw new Error("Faltan datos");

try{ const coincidencias = await Country.findAll({
          where: {
            nombre: {
            [Op.iLike]: `%${nombre}%`,
             },
            }
        })
    
        if(coincidencias.length === 0)throw new Error("No se encontraron coincidencias")
return coincidencias
}catch(err){
    throw new  new Error(err.message)
}

};

module.exports = {
 getCountryController,
 idController,
 nombreController
}
