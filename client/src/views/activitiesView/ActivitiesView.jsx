
import { Link } from "react-router-dom";
import CardActivity from "../../components/cardActivity/cardActivity";
  import {useSelector} from "react-redux"

export default function ActivityView(){

    const activities= useSelector((state)=>state.activities)

    return (
      <div>
      <Link to='/form'>
      <button>Crear Actividad</button>
      </Link>
      <div className='Actcard'>
      {activities.length?(
        activities?.map((activity)=>(
          <CardActivity key={activity.nombre} activity={activity}/>
        ))
      ):(<h3>Aun no hay actividades creadas</h3>)
      }
      </div>
      </div>
    )
}