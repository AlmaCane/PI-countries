import { Link } from "react-router-dom";
import "./ActivitiesView.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteActivity, getAllActivities } from "../../redux/actionsCreate";
import { useEffect } from "react";
import MenuBar from "../menuBar/MenuBar";

export default function ActivityView() {
  const activities = useSelector((state) => state.activities);
  const selectedCountries = useSelector((state) => state.selectedCountries);
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllActivities());
  }, [dispatch]);

  const handleDelete = (activityName) => {
    dispatch(deleteActivity(activityName));
  };

  return (
    <div>
      <MenuBar />

      <div className="Actcard">
        {activities.length ? (
          activities.map((activity) => {
            // Creamos un conjunto para almacenar los nombres de los países
            const countryNames = new Set();

            // Iteramos sobre los países asociados a la actividad y los agregamos al conjunto
            selectedCountries
              .filter(
                (selectedCountry) =>
                  selectedCountry.activityName === activity.nombre
              )
              .forEach((selectedCountry) =>
                selectedCountry.countryIds.forEach((countryId) => {
                  const country = countries.find(
                    (country) => country.id === countryId
                  );
                  country && countryNames.add(country.nombre);
                })
              );

            return (
              <div className="carta" key={activity.nombre}>
                <button onClick={() => handleDelete(activity.nombre)}>X</button>
                <h2>{activity.nombre}</h2>
                <h3>Duracion: {activity.duracion} hs</h3>
                <h3>
                  Países:
                  <ul>
                    {[...countryNames].map((countryName, idx) => (
                      <li key={idx}>{countryName}</li>
                    ))}
                  </ul>
                </h3>
                <h3>Estacion: {activity.estacion}</h3>
                <h3>Dificultad: {activity.dificultad}</h3>
              </div>
            );
          })
        ) : (
          <div className="avisodiv">
            <h3 className="aviso">Aún no hay actividades creadas</h3>
            <Link to="/form">
              <button>+</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
