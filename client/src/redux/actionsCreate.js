import axios from "axios";
import { CREATE_ACTIVITY, DELETE_ACTIVITY } from "./actions";

const endpoint = "http://localhost:3001/activities";

export const createActivity = (activity) => async (dispatch) => {
    try {
        const { data } = await axios.post(endpoint, activity);
        dispatch({
            type: CREATE_ACTIVITY,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: "ERROR",
            payload: error.message
        });
    }
};

export const deleteActivity = (nombre) => async (dispatch) => {
    try {
        const { data } = await axios.delete(`${endpoint}/${nombre}`);
        dispatch({
            type: DELETE_ACTIVITY,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: "ERROR",
            payload: error.message
        });
    }
};
