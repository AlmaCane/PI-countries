import { Link } from "react-router-dom";
import "./ActivitiesView.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteActivity, getAllActivities } from "../../redux/actionsCreate";
import { useEffect } from "react";
import MenuBar from "../menuBar/MenuBar";

export default function ActivityView() {
  const activities = useSelector((state) => state.activities);
  const selectedCountries = useSelector((state) => state.selectedCountries);
  const countries = useSelector (state=> state.countries)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllActivities());
  }, [dispatch]);

  useEffect(() => {
    console.log(selectedCountries);
  }, [selectedCountries]);

  const handleDelete = (activityName) => {
    dispatch(deleteActivity(activityName));
  };

  return (
    <div>
      <MenuBar />
      <Link to="/form">
        <button>Crear Actividad</button>
      </Link>
      <div className="Actcard">
        {activities.length ? (
          activities.map((activity) => (
            <div className="carta" key={activity.nombre}>
              <button onClick={() => handleDelete(activity.nombre)}>X</button>
              <h2>{activity.nombre}</h2>
              <h3>Duracion: {activity.duracion} hs</h3>
              <h3>Paises:
              {activity.nombre === selectedCountries.activityName && (
  <ul>
    {selectedCountries.countryIds.map((countryId) => {
      const country = countries.find((c) => c.id === countryId);
      return (
        <li key={countryId}>
          {country ? country.nombre : "Country Not Found"}
        </li>
      );
    })}
  </ul>
)}
              </h3>
              <h3>Estacion: {activity.estacion}</h3>
              <h3>Dificultad: {activity.dificultad}</h3>
            </div>
          ))
        ) : (
          <h3>Aun no hay actividades creadas</h3>
        )}
      </div>
    </div>
  );
}
