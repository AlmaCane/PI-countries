
export default function CardActivity({  nombre, dificultad, duracion, estacion, countries }) {
  return (
    <div className="card">
    
      <div>{nombre}</div>
      <div>dificultad:{dificultad}</div>
      <div>duracion:{duracion}</div>
      <div>{estacion}</div>
      <div>paises:{countries}</div>
    </div>
  );
}
