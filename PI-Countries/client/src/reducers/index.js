import {
  GET_COUNTRIES,
  GET_COUNTRY_NAME,
  // GET_COUNTRY_ID,
  // POST_ACTIVITY,
} from "../actions/index";

const initialState = {
  countries: [],
  activities: [],
  countrySearch: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, countries: action.payload };

    case GET_COUNTRY_NAME:
      return { ...state, countrySearch: action.payload };

    default:
      return state;
  }
}

export default rootReducer;
