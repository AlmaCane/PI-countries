import { useLocation } from "react-router-dom"; // Usa useLocation en lugar de useNavigate
import CardActivity from "../card/Card";
import "./Cards.css"

export default function CardsActivity({allActivities}) {
  const { pathname } = useLocation(); // Usa useLocation para obtener la ruta actual


  if (pathname === "/activities") {
    return (
      <div className="cartas">
  
        {allActivities.map((activity) => (
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