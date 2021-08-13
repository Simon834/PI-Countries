import {
  CLEAR_DETAIL,
  GET_ACTIVITIES,
  GET_COUNTRIES,
  GET_COUNTRY_ID,
  GET_COUNTRY_NAME,
  GET_REGIONS,
  ORDER_FILTER,
  // POST_ACTIVITY,
} from "../actions/index";

const initialState = {
  countries: [],
  activities: [],
  countrySearch: [],
  countryDetail: [],
  regions: [],
  filteredCountries: [],
  filteredBy: "All",
  orderedBy: "All",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ACTIVITIES:
      return { ...state, activities: action.payload };
    case GET_REGIONS:
      return { ...state, regions: action.payload };
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        filteredCountries: action.payload,
      };

    case GET_COUNTRY_NAME:
      return { ...state, countrySearch: action.payload };

    case GET_COUNTRY_ID:
      return { ...state, countryDetail: action.payload };
    case CLEAR_DETAIL:
      return { ...state, countryDetail: action.payload };

    case ORDER_FILTER:
      switch (action.payload.type) {
        case "Allorder":
          return { ...state, filteredBy: "All" };
        case "nameAZ":
          return {
            ...state,
            filteredCountries: Array.from(
              state.filteredCountries.sort((a, b) =>
                a.name > b.name ? 1 : b.name > a.name ? -1 : 0
              )
            ),

            orderedBy: action.payload.type,
          };
        case "nameZA":
          return {
            ...state,
            filteredCountries: Array.from(
              state.filteredCountries.sort((a, b) =>
                a.name < b.name ? 1 : b.name < a.name ? -1 : 0
              )
            ),

            orderedBy: action.payload.type,
          };
        case "popH2L":
          return {
            ...state,
            filteredCountries: Array.from(
              state.filteredCountries.sort((a, b) =>
                a.population < b.population
                  ? 1
                  : b.population < a.population
                  ? -1
                  : 0
              )
            ),

            orderedBy: action.payload.type,
          };

        case "popL2H":
          return {
            ...state,
            filteredCountries: Array.from(
              state.filteredCountries.sort((a, b) =>
                a.population > b.population
                  ? 1
                  : b.population > a.population
                  ? -1
                  : 0
              )
            ),

            orderedBy: action.payload.type,
          };

        case "filterRegion":
          let region = action.payload.data;

          let filteredRegions = state.countries.filter(
            (p) => p.region === region
          );

          if (region) {
            return {
              ...state,
              filteredCountries: [...filteredRegions],
              filteredBy: region,
            };
          } else {
            return { ...state };
          }
        case "filterActivity":
          let activity = action.payload.data;

          let filteredActivities = state.countries.filter((p) =>
            p.activities.includes(activity)
          );

          if (activity) {
            return {
              ...state,
              filteredCountries: [...filteredActivities],
              filteredBy: activity,
            };
          } else {
            return { ...state };
          }

        default:
          return { ...state };
      }
    default:
      return state;
  }
}

export default rootReducer;
