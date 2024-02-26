import { Link } from "react-router-dom";
import "./ActivitiesView.css";
import { useSelector, useDispatch } from "react-redux";
import { getActivitiesCountry, getAllActivities } from "../../redux/actionsCreate";
import { useEffect } from "react";
import MenuBar from "../menuBar/MenuBar";

export default function ActivityView() {
  const activities = useSelector((state) => state.activities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllActivities());
    dispatch(getActivitiesCountry(id))
    console.log(activities);
  }, [dispatch]);

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
              <h2>{activity.nombre}</h2>
              <h3>Duracion: {activity.duracion} hs</h3>
              <h3>
                Países:
                {activity.countries?.map((country) => (
                  <div key={country.id}>{country.nombre}</div>
                ))}
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
