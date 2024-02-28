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
  SELECCIONAR_PAISES,
  PUT_ACTIVITY
} from "./actions";

const initialstate = {
  activities: [],
  errors: [],
  countries: [],
  countriesCopy: [],
  idCountry: [],
  selectedCountries: [],
  filtros: [],
};

function reducer(state = initialstate, action) {
  switch (action.type) {
    case SAVE_ACTIVITIES_COUNTRY:
      return {
        ...state,
        selectedCountries: [...state.countryActivity, action.payload],
        errors: [],
      };
      case PUT_ACTIVITY:
        return{
        ...state,

        }
    case GET_ALL_ACTIVITIES:
      return {
        ...state,
        activities: action.payload.map((activity) => ({
          ...activity,
        })),
      };
    case CREATE_ACTIVITY:
        const updatedActivityIndex = state.activities.findIndex(activity => activity.nombre === action.payload.nombre);

      // Si se encontró la actividad
      if (updatedActivityIndex !== -1) {
        // Copia el array de actividades del estado para no mutar el estado original
        const updatedActivities = [...state.activities];
        // Reemplaza la actividad actualizada en el array de actividades
        updatedActivities[updatedActivityIndex] = action.payload;

        // Devuelve el nuevo estado con la actividad actualizada
        return {
          ...state,
          activities: updatedActivities,
          // Otros datos del estado que necesites actualizar
        };
      } else {
        // Si no se encontró la actividad, devuelve el estado sin cambios
        return state;
      }case FILTRADO_ORDENADO:
      const { orden, filtro, actFiltro } = action.payload;
    
      let filteredCountries = [...state.countriesCopy]; // Hacer una copia para evitar mutar el estado original
    
      // Filtrar por actividad si se proporciona un filtro de actividad
      if (actFiltro !== "x") {
        filteredCountries = filteredCountries.filter(country =>
          state.selectedCountries.some(activity =>
            activity.activityEstacion === actFiltro && activity.countryIds.includes(country.id)
          )
        );
      }
    
      // Filtrar por continente si se proporciona un filtro de continente
      if (filtro !== "x") {
        filteredCountries = filteredCountries.filter(country => country.continente === filtro);
      }
    
      // Ordenar si se proporciona un tipo de orden
      if (orden !== "x") {
        switch (orden) {
          case "Alfabeticamente":
            filteredCountries.sort((a, b) => a.nombre.localeCompare(b.nombre));
            break;
          case "Alfabeticamente descendente":
            filteredCountries.sort((a, b) => b.nombre.localeCompare(a.nombre));
            break;
          case "MasPoblacion":
            filteredCountries.sort((a, b) => b.poblacion - a.poblacion);
            break;
          case "MasArea":
            filteredCountries.sort((a, b) => b.area - a.area);
            break;
          case "MenosPoblacion":
            filteredCountries.sort((a, b) => a.poblacion - b.poblacion);
            break;
          case "MenosArea":
            filteredCountries.sort((a, b) => a.area - b.area);
            break;
          default:
            break;
        }
      }
    
      return {
        ...state,
        countries: filteredCountries,
      };
    
    case SELECCIONAR_PAISES:
      return {
        ...state,
        selectedCountries: [...state.selectedCountries, action.payload],
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
      } else if (action.payload === "MenosPoblacion") {
        sortedCountries.sort((a, b) => a.poblacion - b.poblacion);
      } else if (action.payload === "MenosArea") {
        sortedCountries.sort((a, b) => a.area - b.area);
      }

      return {
        ...state,
        countries: sortedCountries,
      };
    case FILTER:
      const newCountries = state.countriesCopy.filter((country) =>
        country.continente.includes(action.payload)
      );
      {
        return {
          ...state,
          countries: newCountries,
        };
      }
    case FILTER_ACT:
      state.countries = state.countriesCopy;
      const countrAct = state.countries.filter((country) => {
        return state.selectedCountries.some((activity) => {
          return activity.activityEstacion === action.payload && activity.countryIds.includes(country.id);
      })})
      return { ...state, countries: countrAct };

    default:
      return state;
  }
}

export default reducer;
