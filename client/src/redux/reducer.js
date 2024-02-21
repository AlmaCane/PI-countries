
import { CREATE_ACTIVITY, DELETE_ACTIVITY } from "./actions"
const initialstate={
 activities: [],
 allActtivities: [],
 errors:[]
}


function reducer(state=initialstate, action){
    switch(action.type){
        case CREATE_ACTIVITY:
            return { ...state,
                 activities: action.payload,
                  allactivities: action.payload,
                errors:[]};
        

       case DELETE_ACTIVITY:
         return { ...state, activities: action.payload, errors: []};
 
    case "ERROR":
        return{
            ...state,
            errors: action.payload
        }
    default :return state
}
}






export default reducer;