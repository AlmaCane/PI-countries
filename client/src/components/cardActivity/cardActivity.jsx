

export default function CardActivity(activities) {
  const { nombre, dificultad, duracion, estacion, countries } = activities;
  console.log(nombre);
  return (
    <div className="card">
      <div>{nombre}</div>
      <div>dificultad: {dificultad}</div>
      <div>duración: {duracion}</div>
      <div>{estacion}</div>
      <div>
        <strong>Países:</strong>
        <ul>
          {countries?.map((country, index) => (
            <li key={index}>{country}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
