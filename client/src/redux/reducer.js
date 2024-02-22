import {
  CREATE_ACTIVITY,
  DELETE_ACTIVITY,
  GET_ALL_COUNTRIES,
  GET_COUNTRY_BY_ID,
  GET_COUNTRY_BY_NAME,
} from "./actions";


const initialstate = {
  activities: [],
  allActtivities: [],
  errors: [],
  countries: [],
  countriesCopy: [],
  idCountry: [],
};

function reducer(state = initialstate, action) {
  switch (action.type) {
    case CREATE_ACTIVITY:
      return {
        ...state,
        activities: action.payload,
        allactivities: action.payload,
        errors: [],
      };

    case DELETE_ACTIVITY:
      return { ...state, activities: action.payload, errors: [] };

    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        countriesCopy: action.payload,
        errors: [],
      };

    case GET_COUNTRY_BY_NAME:
      return {
        ...state,
        countries: action.payload,
        errors: [],
      };

    case GET_COUNTRY_BY_ID:
      return {
        ...state,
        idCountry: action.payload,
        errors: [],
      };

    case "ERROR":
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
