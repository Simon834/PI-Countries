// import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from "../reducers/index";
// import thunk from "redux-thunk";

// const composeEnhancers =
//   (typeof window !== undefined && window.REDUX_DEVTOOLS_EXTENSION_COMPOSE) ||
//   compose;

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );

// export default store;

// import rootReducer from "../reducers/index";
// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";

// const composeEnhancers =
//   (typeof window !== "undefined" && window.REDUX_DEVTOOLS_EXTENSION_COMPOSE) ||
//   compose;

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );

// export default store;

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

const enhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancers);
}
