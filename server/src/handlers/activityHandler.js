const {postNewActivity}=require('../controllers/postNewActivity')
const {getAllActivities}=require('../controllers/getAllActivities')

const postActivity= async (req,res)=>{
    const {nombre,dificultad,duracion,temporada,countryId}=req.body;

    try {
        const response= await postNewActivity(nombre,dificultad,duracion,temporada,countryId);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message});
    }

}

const getActivities= async (req,res)=>{
    const response=await getAllActivities();
    res.status(200).json(response);
}

module.exports={postActivity,getActivities};