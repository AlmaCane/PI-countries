import {Link} from "react-router-dom"
export default function NavBar (){

return(
    <div>
<button>
            <Link to={"/form"}>Crear actividad</Link>
          </button>
        <button>
            <Link to={"/activities"}>Todas las actividades</Link>
        </button>
       
    </div>
    )
}