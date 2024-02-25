import { useLocation } from "react-router-dom"; // Usa useLocation en lugar de useNavigate
import Card from "../card/Card";
import "./Cards.css"

export default function Cards({countriesToShow,prevPage,nextPage,pagina}) {
  const { pathname } = useLocation(); // Usa useLocation para obtener la ruta actual


  if (pathname === "/home") {
    return (
      <div >
        <div className="divboton">
        <img src="https://th.bing.com/th/id/R.8796d85c70dd41447b0de7458b7c1eec?rik=oSJDgTbC0fYPng&riu=http%3a%2f%2fwww.smartstudy.com.tw%2fimages%2fprev-arrow-png.png&ehk=8EA%2fJCPsH1BKB5sOrJgntxjnnUXShmQQ13g5VXNpRvo%3d&risl=&pid=ImgRaw&r=0" alt="before" onClick={prevPage} className="boton" />
      <h4 className='paginaStyle'>Página: {pagina}</h4> 
<img src="https://th.bing.com/th/id/R.34430d40d721d9e7d6ef59d1802380ca?rik=yf97wLJATIMUsA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fnext-button-png-arrow-next-right-icon-512.png&ehk=HurbUZvWK18qVGuCSBoywX4wjbI%2bm0EFJJPfwFjcaX0%3d&risl=&pid=ImgRaw&r=0" alt="next" onClick={nextPage} className="boton" />
        
      </div>
      <div className="cartas">
      
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
        </div>
        <div className="divboton">

     <img src="https://th.bing.com/th/id/R.8796d85c70dd41447b0de7458b7c1eec?rik=oSJDgTbC0fYPng&riu=http%3a%2f%2fwww.smartstudy.com.tw%2fimages%2fprev-arrow-png.png&ehk=8EA%2fJCPsH1BKB5sOrJgntxjnnUXShmQQ13g5VXNpRvo%3d&risl=&pid=ImgRaw&r=0" alt="before" onClick={prevPage} className="boton" />
      <h4 className='paginaStyle'>Página: {pagina}</h4> 
<img src="https://th.bing.com/th/id/R.34430d40d721d9e7d6ef59d1802380ca?rik=yf97wLJATIMUsA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fnext-button-png-arrow-next-right-icon-512.png&ehk=HurbUZvWK18qVGuCSBoywX4wjbI%2bm0EFJJPfwFjcaX0%3d&risl=&pid=ImgRaw&r=0" alt="next" onClick={nextPage} className="boton" />
        </div>
      </div>
    );
  } else {
    return null; 
  }
}