import { MENU_SUCCESS, ITEMS_LOADING } from "../actions/types";
import resData from "./Menu.json";

const initialState = {
  resData,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MENU_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
