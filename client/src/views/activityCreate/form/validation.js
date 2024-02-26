
const Validation=(input)=>{
    let error={}
    
    if (input.nombre.length<1){ error.nombre="El nombre no puede estar vacío"}
    
    if (!input.dificultad){ error.dificultad="Elija un grado de dificultad"}

    if (input.duracion<=0){error.duracion="La duracion debe ser mayor a 0"}

    if (!input.estacion){ error.temporada="Seleccione una estación"}
    

    
    


    
    return error
}

export default Validation;