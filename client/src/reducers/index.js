import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import restaurant from "./menuReducer";

export default combineReducers({
  item: itemReducer,
  restaurant
});
