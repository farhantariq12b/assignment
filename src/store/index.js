import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import dataReducer from "./reducers/contactReducer";

const rootReducer = combineReducers({
  dataReducer, // Add your reducers here
  // ...other reducers
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
