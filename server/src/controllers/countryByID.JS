const {Country,Activity}= require('../db.js');

const countryById=async(id)=> await Country.findOne({where:{id:id},include:[{model:Activity,
    as:'Activities',
attributes:["nombre","estacion"],
through:{attributes:[]}}]})


module.exports={countryById}