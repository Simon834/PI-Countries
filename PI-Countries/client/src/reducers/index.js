import {
  CLEAR_DETAIL,
  GET_COUNTRIES,
  GET_COUNTRY_ID,
  GET_COUNTRY_NAME,
  ORDER_FILTER,
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

    case ORDER_FILTER:
      switch (action.payload) {
        case "nameAZ":
          return {
            ...state,
            countries: state.countries.sort((a, b) =>
              a.name > b.name ? 1 : b.name > a.name ? -1 : 0
            ),
          };
        case "nameZA":
          return {
            ...state,
            countries: state.countries.sort((a, b) =>
              a.name < b.name ? 1 : b.name < a.name ? -1 : 0
            ),
          };
        case "popH2L":
          return {
            ...state,
            countries: state.countries.sort((a, b) =>
              a.population < b.population
                ? 1
                : b.population < a.population
                ? -1
                : 0
            ),
          };

        case "popL2H":
          return {
            ...state,
            countries: state.countries.sort((a, b) =>
              a.population > b.population
                ? 1
                : b.population > a.population
                ? -1
                : 0
            ),
          };

        default:
          return;
      }
    default:
      return state;
  }
}

export default rootReducer;
