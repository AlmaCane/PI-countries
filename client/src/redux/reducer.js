import {
  CREATE_ACTIVITY,
  DELETE_ACTIVITY,
  GET_ALL_COUNTRIES,
  GET_COUNTRY_BY_ID,
  GET_COUNTRY_BY_NAME,
  FILTER,
  ORDER,
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

    default:
      return state;
  }
}

export default reducer;