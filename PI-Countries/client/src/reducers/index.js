import {
  CLEAR_DETAIL,
  GET_COUNTRIES,
  GET_COUNTRY_ID,
  GET_COUNTRY_NAME,
  // POST_ACTIVITY,
} from "../actions/index";

const initialState = {
  countries: [],
  activities: [],
  countrySearch: [],
  countryDetail: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, countries: action.payload };

    case GET_COUNTRY_NAME:
      return { ...state, countrySearch: action.payload };

    case GET_COUNTRY_ID:
      return { ...state, countryDetail: action.payload };
    case CLEAR_DETAIL:
      return { ...state, countryDetail: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
