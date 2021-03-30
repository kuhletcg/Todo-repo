import { createStore, combineReducers } from "redux";
import foodReducer from "./redux/reducers/foodReducer";

const rootReducer = combineReducers({
  food: foodReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
