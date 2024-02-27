import {
  CREATE_ACTIVITY,
  DELETE_ACTIVITY,
  GET_ALL_COUNTRIES,
  GET_COUNTRY_BY_ID,
  GET_COUNTRY_BY_NAME,
  FILTER,
  ORDER,
  GET_ALL_ACTIVITIES,
  SAVE_ACTIVITIES_COUNTRY,
  FILTER_ACT,
  FILTRADO_ORDENADO, 
  SELECCIONAR_PAISES
} from "./actions";

const initialstate = {
  activities: [],
  errors: [],
  countries: [],
  countriesCopy: [],
  idCountry: [],
  selectedCountries: [],
  filtros:[]
};

function reducer(state = initialstate, action) {
  switch (action.type) {
    case SAVE_ACTIVITIES_COUNTRY:
      return{
      ...state,
      countryActivity: action.payload,
      errors: []
      }
    case GET_ALL_ACTIVITIES:
      return {
        ...state,
        activities: action.payload.map(activity => ({
          ...activity,
          countries: [] // Aquí debes asignar la lista de identificadores de países asociados a cada actividad
        }))
      }
    case CREATE_ACTIVITY:
      return {
        ...state,
        activities:[...state.activities, action.payload],
        countryActivity: action.payload.countries,
        errors: [],
      };
      case FILTRADO_ORDENADO:
        const { orden, filtro } = action.payload;
        
        // Filtrar países por continente si se proporciona un filtro de continente
        let filteredpais = [...state.countriesCopy]; // Hacer una copia para evitar mutar el estado original
        if (filtro !== "x") {
          filteredpais = filteredpais.filter(country => country.continente.includes(filtro));
        }
        
        // Realizar el ordenamiento si se proporciona un tipo de orden
        let sorted = [...filteredpais];
        if (orden !== "x") {
          switch (orden) {
            case "Alfabeticamente":
              sorted.sort((a, b) => a.nombre.localeCompare(b.nombre));
              break;
            case "Alfabeticamente descendente":
              sorted.sort((a, b) => b.nombre.localeCompare(a.nombre));
              break;
            case "MasPoblacion":
              sorted.sort((a, b) => b.poblacion - a.poblacion);
              break;
            case "MasArea":
              sorted.sort((a, b) => b.area - a.area);
              break;
            case "MenosPoblacion":
              sorted.sort((a, b) => a.poblacion - b.poblacion);
              break;
            case "MenosArea":
              sorted.sort((a, b) => a.area - b.area);
              break;
            default:
              break;
          }
        }
      
        return {
          ...state,
          countries: sorted,
        };
      case SELECCIONAR_PAISES:
        return{
        ...state,
        selectedCountries: action.payload
        }

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
    case ORDER:
      const { countriesCopy } = state;
      let sortedCountries = [...countriesCopy]; // Crear una copia del array

      if (action.payload === "Alfabeticamente") {
        sortedCountries.sort((a, b) => a.nombre.localeCompare(b.nombre));
      } else if (action.payload === "Alfabeticamente descendente")
        sortedCountries.sort((a, b) => b.nombre.localeCompare(a.nombre));
      else if (action.payload === "MasPoblacion") {
        sortedCountries.sort((a, b) => b.poblacion - a.poblacion);
      } else if (action.payload === "MasArea") {
        sortedCountries.sort((a, b) => b.area - a.area);
      }
      else if (action.payload === "MenosPoblacion") {
        sortedCountries.sort((a, b) => a.poblacion - b.poblacion);
      } else if (action.payload === "MenosArea") {
        sortedCountries.sort((a, b) => a.area - b.area);
      }

      return {
        ...state,
        countries: sortedCountries,
      };
    case FILTER:
      const filteredCountries = state.countriesCopy.filter((country) =>
        country.continente.includes(action.payload)
      );
      {
        return {
          ...state,
          countries: filteredCountries,
        };
      }
      case FILTER_ACT:
        state.countries=state.countriesCopy
        const countrAct=state.countries.filter((country)=>{
            const filteredCountryByAct=country.Activities.find((activity)=>activity.estacion==action.payload);return filteredCountryByAct})
        console.log(countrAct)
        return {...state,countries:countrAct}


    default:
      return state;
  }
}

export default reducer;