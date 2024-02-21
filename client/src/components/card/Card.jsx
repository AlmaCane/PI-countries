import {Link} from "react-router-dom";

export default function Card(props){
    const {id,nombre,  continente, capital, subregion, area, poblacion, imagen} = props;


return (
    <div>
        <div><image src={imagen} alt={nombre} id="bandera"/></div>
        <div>{id}</div> <Link to={`/detail/${id}`}>
        
        <div>{nombre}</div>
        </Link>
        <div>{continente}</div>
        <div>{capital}</div>
        <div>{subregion}</div>
        <div>{area}</div>
        <div>{poblacion}</div>

    </div>
    
    )
}