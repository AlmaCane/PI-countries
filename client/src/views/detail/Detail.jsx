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
  
  useEffect(() => {
    dispatch(getCountryById(id)); // Pasar el ID del país a la acción
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
        <NavLink to="/form" >Añadir</NavLink>
      </div>
    </div>
  );
}
