import { Link } from "react-router-dom";
import "./Card.css"

export default function Card({ id, nombre, continente, capital, subregion, area, poblacion, imagen }) {
  return (
    <div className="card">
      <div><img src={imagen} alt={nombre} id="bandera" /></div>
      <div >{id}</div>
      <Link to={`/detail/${id}`}>
        <div className="nombre">{nombre}</div>
      </Link>
      <div>{continente}</div>
      <div>{capital}</div>
      <div>{subregion}</div>
      <div>Area:{area}</div>
      <div>Poblacion:{poblacion}</div>
    </div>
  );
}