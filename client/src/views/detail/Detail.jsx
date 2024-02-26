import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryById } from "../../redux/actionsCreate";
import { useParams, NavLink } from "react-router-dom";
import "./Detail.css"
import MenuBar from "../menuBar/MenuBar";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.idCountry); // Obtener el país directamente, no como un array
  const activities = useSelector((state) => state.activities);
  const actividades = activities.filter((actividad) => 
  actividad.countries?.some((country) => country.id === id)
);

  useEffect(() => {
    dispatch(getCountryById(id)); 
    console.log(id);// Pasar el ID del país a la acció<nav></nav>
    console.log(activities);
    console.log(actividades);
  }, [id, dispatch]);

  return (
    <div>
      <MenuBar/>
      <div key={country.id} className="carddetail">
        <NavLink to="/home">🢀 </NavLink>
        <h3 className="name">{country.nombre}</h3>
        <img src={country.imagen} alt={country.nombre} className="imagenbandera" />
        <h2>{country.name}</h2>
        <hr />
        <h2>Capital: {country.capital}</h2>
        <h2>Continente: {country.continente}</h2>
        <h2>Sub-Región: {country.subregion}</h2>
        <h2>Área Territorial: {country.area} km²</h2>
        <h2>Población: {country.poblacion}</h2>
        <h2>Actividades:</h2>
        <ul>
          {actividades.map((actividad) => (
            <li key={actividad.id}>
              <h3>{actividad.nombre}</h3>
              <p>Duración: {actividad.duracion}</p>
              <p>Dificultad: {actividad.dificultad}</p>
            </li>
          ))}
        </ul>
      
        <NavLink to="/form" >Añadir</NavLink>
      </div>
    </div>
  );
}
