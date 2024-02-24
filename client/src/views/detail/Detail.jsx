
import { useSelector} from "react-redux";
export default function Detail (){

const detail = useSelector(state=> state.idCountry)
console.log(detail);
return(
    <div>
        {detail.nombre}
        {detail.continente}
        area:{detail.area}
        poblacion:{detail.poblacion}
        {detail.subregion}

    </div>
    )
}