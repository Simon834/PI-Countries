import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_NAME = "GET_COUNTRY_NAME";
export const GET_COUNTRY_ID = "GET_COUNTRY_ID";
export const POST_ACTIVITY = "POST_COUNTRY";

const backURL = "http://localhost:3001";

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

export const postActivity = () => {
  return async (dispatch) => {
    const request = await axios.get(`${backURL}/countries`);
    const data = request.data;
    return dispatch({ type: POST_ACTIVITY, payload: data });
  };
};
