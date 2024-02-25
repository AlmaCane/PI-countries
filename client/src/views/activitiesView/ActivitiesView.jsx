
import { Link } from "react-router-dom";
import CardActivity from "../../components/cardActivity/cardActivity";
  import {useSelector, useDispatch} from "react-redux"
  import { getAllActivities } from "../../redux/actionsCreate";
import { useEffect } from "react";
import MenuBar from "../menuBar/MenuBar";

export default function ActivityView(){

    const activities= useSelector((state)=>state.activities);

    const dispatch = useDispatch();
    useEffect(()=>{
    dispatch(getAllActivities())
    }, [dispatch])

    return (
      <div>
        <MenuBar/>
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