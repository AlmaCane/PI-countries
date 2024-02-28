import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryById } from "../../redux/actionsCreate";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import "./Detail.css";
import MenuBar from "../menuBar/MenuBar";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.idCountry);
  const activities= useSelector(state=> state.activities)
  const selectedCountries = useSelector(state=>state.selectedCountries);
  const relatedActivities = selectedCountries
.filter(selectedCountry => selectedCountry.countryIds.includes(id))
  .map(selectedCountry => selectedCountry.activityName)
  .reduce((uniqueActivities, activityName) => {
    if (!uniqueActivities.includes(activityName)) {
      uniqueActivities.push(activityName);
    }
    return uniqueActivities;
  }, []);

  const activityDetails = relatedActivities.map(activityName => {
    const activity = activities.find(act => act.nombre === activityName);
    return activity ? {
      nombre:activity.nombre,
      duracion: activity.duracion,
      estacion: activity.estacion,
      dificultad: activity.dificultad
    } : null;
  });
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getCountryById(id));
  }, [id, dispatch]);

const handleClick=(id)=>{
navigate("/form", {state:{ countryIdElegido: id}})

}

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
        <div className="divact">


        <h2>Actividades:</h2>
        <ul>
        {activityDetails.map((activity, index) => (
          <li key={index}>
            {activity && (
              <div>
                <p className="letras"> {activity.nombre}</p>
                <p className="letras">Duración: {activity.duracion}</p>
                <p className="letras">Estación: {activity.estacion}</p>
                <p className="letras">Dificultad: {activity.dificultad}</p>
              </div>
            )}
          </li>
        ))}
        {activityDetails.length === 0 && (
          <p className="letras">No se encontraron actividades relacionadas</p>
        )}
      </ul>
        <button to="/form" className="añadir" onClick={()=>handleClick(country.id)}>+</button>
        </div>
      </div>
    </div>
  );
}
