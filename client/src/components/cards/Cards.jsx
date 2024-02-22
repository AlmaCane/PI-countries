import { useLocation } from "react-router-dom"; // Usa useLocation en lugar de useNavigate
import Card from "../card/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCountries } from "../../redux/actionsCreate";
import "./Cards.css"

export default function Cards() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const { pathname } = useLocation(); // Usa useLocation para obtener la ruta actual

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  if (pathname === "/home") {
    return (
      <div className="cartas">
        {countries.map((pais) => (
          <Card
            key={pais.id}
            id={pais.id}
            nombre={pais.nombre} 
            area={pais.area}
            subregion={pais.subregion}
            continente={pais.continente}
            capital={pais.capital}
            imagen={pais.imagen}
            poblacion={pais.poblacion}
          />
        ))}
      </div>
    );
  } else {
    return null; 
  }
}
