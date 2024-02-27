
const Validation=(activityData)=>{
    let error={}
    
     if (activityData.nombre.length<1){ error.nombre="El nombre no puede estar vacío"}
    
     if (activityData.dificultad){ error.dificultad="Elija un grado de dificultad"}

    if ( activityData.duracion.length >=3){error.duracion="La duracion no puede tener mas de dos dígitos"}



    
    return error
}

export default Validation;