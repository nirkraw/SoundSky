import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";

// const configureStore = (preloadedState = {}) =>
//     createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));

const configureStore = (preloadedState = {}) => {
  let middleware = [thunk, logger];
  if (
    process.env.NODE_ENV === "production" 
    // || process.env.NODE_ENV === "development"
  ) {

    middleware = [thunk];
  }
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware)
  );
};

export default configureStore;
