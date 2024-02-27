import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryById } from "../../redux/actionsCreate";
import { useParams, NavLink } from "react-router-dom";
import "./Detail.css";
import MenuBar from "../menuBar/MenuBar";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.idCountry);
  const activities= useSelector(state=> state.countryActivity)

  useEffect(() => {
    dispatch(getCountryById(id));
  }, [id, dispatch]);

  return (
    <div>
      <MenuBar />
      <div key={country.id} className="carddetail">
        {country ? (
          <><div className="flechitadiv">
          <NavLink to="/home" className={"flechita"}>🢀 </NavLink>
            <h3 className="name">{country.nombre}</h3>

          </div>
            <img
              src={country.imagen}
              alt={country.nombre}
              className="imagenbandera"
            />
            <h2>{country.name}</h2>
            <div className="texto">

            <h2>Capital: {country.capital}</h2>
            <h2>Continente: {country.continente}</h2>
            <h2>Sub-Región: {country.subregion}</h2>
            <h2>Área Territorial: {country.area} km²</h2>
            <h2>Población: {country.poblacion} habitantes</h2>
              
            </div>
          </>
        ) : (
          <p>Loading country details...</p>
        )}
        <h2>Actividades:</h2>
        {
          activities?.map((activity) => (
            <div key={activity.nombre}>
              <p>Activity: {activity.nombre}</p>
              <p>Dificultad: {activity.dificultad}</p>
              <p>Duracion: {activity.duracion}</p>
              <p>Estacion: {activity.estacion}</p>
              {/* Delete button functionality needed */}
              <button value={id}>Delete</button>
            </div>
          )
        )}
        <NavLink to="/form">Añadir</NavLink>
      </div>
    </div>
  );
}
