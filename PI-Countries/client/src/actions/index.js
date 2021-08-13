import axios from "axios";

export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_REGIONS = "GET_REGIONS";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_NAME = "GET_COUNTRY_NAME";
export const GET_COUNTRY_ID = "GET_COUNTRY_ID";
export const POST_ACTIVITY = "POST_COUNTRY";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const ORDER_FILTER = "ORDER_FILTER";

const backURL = "http://localhost:3001";

export const getRegions = () => {
  return async (dispatch) => {
    const request = await axios.get(`${backURL}/aux/regions`);
    const data = request.data;
    return dispatch({ type: GET_REGIONS, payload: data });
  };
};
export const getActivities = () => {
  return async (dispatch) => {
    const request = await axios.get(`${backURL}/aux/activities`);
    const data = request.data;
    return dispatch({ type: GET_ACTIVITIES, payload: data });
  };
};

export const getCountries = () => {
  return async (dispatch) => {
    const request = await axios.get(`${backURL}/countries`);
    const data = request.data;
    return dispatch({ type: GET_COUNTRIES, payload: data });
  };
};

export const getCountriesName = (name) => {
  return async (dispatch) => {
    const request = await axios.get(`${backURL}/countries?name=${name}`);
    const data = request.data;
    return dispatch({ type: GET_COUNTRY_NAME, payload: data });
  };
};

export const getCountriesID = (ID) => {
  return async (dispatch) => {
    const request = await axios.get(`${backURL}/countries/${ID}`);
    const data = request.data;
    return dispatch({ type: GET_COUNTRY_ID, payload: data });
  };
};

export const postActivity = (activity) => {
  return async (dispatch) => {
    await axios.post(`${backURL}/activity`, activity);

    return dispatch({ type: POST_ACTIVITY, payload: "" });
  };
};

export const orderFilter = (type, data) => {
  return (dispatch) => {
    return dispatch({ type: ORDER_FILTER, payload: { type, data } });
  };
};
