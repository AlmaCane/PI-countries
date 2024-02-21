import axios from "axios";
import { CREATE_ACTIVITY, DELETE_ACTIVITY, GET_ALL_COUNTRIES, GET_COUNTRY_BY_ID, GET_COUNTRY_BY_NAME } from "./actions";

const endpoint = "http://localhost:3001/activities";

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

export const getAllCountries = () => {
  const endpoint = "http://localhost:3001/countries";
   try {async (dispatch) => {
    const { data } = axios(endpoint);
    return dispatch({
      type: GET_ALL_COUNTRIES,
      payload: data,
    });
  };}catch(err) {console.log(err.message);}
};

export const getCountryByName = (nombre) => {
try {
    async(dispatch)=>{
        const {data} = axios.get(`http://localhost:3001/countries/?nombre=${nombre}`);
        return dispatch({
        type: GET_COUNTRY_BY_NAME,
        payload: nombre
        })
    
    }
} catch (error) {
console.log(error.message);
}
}

export const getCountryById = (id) => {
try {
    async(dispatch)=>{
        const {data} = axios.get(`http://localhost:3001/countries/${id}`);
        return dispatch({
        type: GET_COUNTRY_BY_ID,
        payload: id
        })
    
    }
} catch (error) {
console.log(error.message);
}
}
