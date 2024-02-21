import { useNavigate } from "react-router-dom";
import Card from "../card/Card";


export default function Cards({paises}){
const {pathname} = useNavigate();
if(pathname === "/")
return (
    <div>
{paises.map(pais=>(
    <Card
             key={pais.id}
             id={pais.id}
               nopmbre={pais.nombre}
               area={pais.area}  
               subregion={pais.subregion}
               continente={pais.continente}
               capital={pais.capital}
               imagen={pais.imagen}
               poblacion={pais.poblacion}


    />
    
    ))
}

    </div>
    )


}