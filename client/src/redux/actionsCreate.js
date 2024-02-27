import axios from "axios";
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
  FILTRADO_ORDENADO
  
} from "./actions";

const endpoint = "http://localhost:3001/activities";

// actionsCreate.js
export const filtradoYOrdenado = (orden, filtro, actFiltro) => ({
  type: FILTRADO_ORDENADO,
  payload: { orden, filtro, actFiltro },
});

export const saveActivitiesCountry= (countries)=>{
return {
type: SAVE_ACTIVITIES_COUNTRY,
payload: countries
}
}
export const filterActivity=(actividad)=>{
return{
type: FILTER_ACT, 
payload:actividad
}
}

export const createActivity = (activity) => async (dispatch) => {
  try {
    const { data } = await axios.post(endpoint, activity);
    dispatch({
      type: CREATE_ACTIVITY,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ERROR",
      payload: error.message,
    });
  }
};

export const deleteActivity = (nombre) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`${endpoint}/${nombre}`);
    dispatch({
      type: DELETE_ACTIVITY,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ERROR",
      payload: error.message,
    });
  }
};
export const getAllActivities = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      dispatch({
        type: GET_ALL_ACTIVITIES,
        payload: data,
      });
    } catch (error) {
      // Manejar el error aquí si es necesario
      console.error("Error al obtener todas las actividades:", error);
    }
  };
};

export const getAllCountries = () => {
  return async (dispatch) => {
    // Envuelve el bloque de código en una función asíncrona que devuelve una función
    const endpoint = "http://localhost:3001/countries";
    try {
      const { data } = await axios.get(endpoint); // Utiliza axios.get() para realizar la solicitud GET
      dispatch({
        type: GET_ALL_COUNTRIES,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message,
      });    }
  };
};

export const getCountryByName = (nombre) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/countries/?nombre=${nombre}`
      );
      dispatch({
        type: GET_COUNTRY_BY_NAME,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };
};

export const getCountryById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/countries/${id}`);
      dispatch({
        type: GET_COUNTRY_BY_ID,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };
};

export const filtrado =(payload)=>{
return {
type: FILTER,
payload: payload
}
}
export const ordenado =(orden)=>{
return {
type: ORDER,
payload: orden
}
}