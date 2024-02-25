import { Link } from "react-router-dom";
import "./Card.css"

export default function Card({ id, nombre, continente, capital, subregion, area, poblacion, imagen }) {
  return (
    <div className="card">
      <div><img src={imagen} alt={nombre} id="bandera" /></div>
      <Link to={`/detail/${id}`} className="nombre">
        <div className="nombre">{nombre}</div>
      </Link>
      <div className="continente">{continente}</div>
      <div>Area:{area}</div>
      <div>Poblacion:{poblacion}</div>
    </div>
  );
}