import { useSelector} from "react-redux";

export default function CardActivity({ nombre, dificultad, duracion, estacion, countries }) {
  const { countries } = useSelector((state) => state.countries);
  return (
    <div className="card">
      <div>{nombre}</div>
      <div>dificultad: {dificultad}</div>
      <div>duración: {duracion}</div>
      <div>{estacion}</div>
      <div>
        <strong>Países:</strong>
        <ul>
          {countries.map((country, index) => (
            <li key={index}>{country}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
