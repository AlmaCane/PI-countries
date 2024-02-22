import { useLocation } from "react-router-dom"; // Usa useLocation en lugar de useNavigate
import Card from "../card/Card";
import "./Cards.css"

export default function Cards({countriesToShow,prevPage,nextPage,pagina}) {
  const { pathname } = useLocation(); // Usa useLocation para obtener la ruta actual


  if (pathname === "/home") {
    return (
      <div className="cartas">
      <button onClick={prevPage}>Anterior</button>
      <button onClick={nextPage}>Siguiente</button>
        {countriesToShow.map((pais) => (
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
              <button onClick={prevPage}>Anterior</button>
      <button onClick={nextPage}>Siguiente</button>
      <h4 className='paginaStyle'>Página: {pagina}</h4> 
      </div>
    );
  } else {
    return null; 
  }
}