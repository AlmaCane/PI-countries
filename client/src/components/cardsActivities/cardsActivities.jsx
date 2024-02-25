import { useLocation } from "react-router-dom"; // Usa useLocation en lugar de useNavigate
import CardActivity from "../card/Card";
import "./Cards.css"
import { useSelector } from "react-redux";

export default function CardsActivity({activities}) {
  const { pathname } = useLocation(); // Usa useLocation para obtener la ruta actual
  if (pathname === "/activities") {
    return (
      <div className="cartas">
  
        {activities.map((activity) => (
          <CardActivity                         
          key={activity.nombre}
          id={activity.nombre}
          nombre={activity.nombre} 
          duracion={activity.duracion}
          estacion={activity.estacion}
          countries={activity.countries}
          />
          ))}
      
      </div>
    );
  } else {
    return null; 
  }
}