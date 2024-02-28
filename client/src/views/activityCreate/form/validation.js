
const Validation=(activityData)=>{
    let error={}
    
     if (activityData.nombre.length<1){ error.nombre="El nombre no puede estar vacío"}
    
     if (!activityData.dificultad){ error.dificultad="La dificultad no puede estar vacía"}
     if (!activityData.estacion){ error.estacion="La estación no puede estar vacía"}
     if (activityData.countries.length === 0){ error.pais="Tiene que elegir un país o más"}
     if (!activityData.duracion){ error.duracion="La duración no puede estar vacía"}

    if ( activityData.duracion.length >=3){error.duracion="La duracion no puede tener mas de dos dígitos"}



    
    return error
}

export default Validation;