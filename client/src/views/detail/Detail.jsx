import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryById } from "../../redux/actionsCreate";
import { useParams, NavLink } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.idCountry); // Obtener el país directamente, no como un array
  
  useEffect(() => {
    dispatch(getCountryById(id)); // Pasar el ID del país a la acción
  }, [id, dispatch]);

  return (
    <div>
      <div key={country.id}>
        <NavLink to="/home">🢀 </NavLink>
        <h3>{country.nombre}</h3>
        <img src={country.imagen} alt={country.nombre} />
        <h2>{country.name}</h2>
        <hr />
        <h2>Capital: {country.capital}</h2>
        <h2>Continente: {country.continente}</h2>
        <h2>Sub-Región: {country.subregion}</h2>
        <h2>Área Territorial: {country.area} km²</h2>
        <h2>Población: {country.poblacion}</h2>
        <h2>Actividades:</h2>
      </div>
    </div>
  );
}
