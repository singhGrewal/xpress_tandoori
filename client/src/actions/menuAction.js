import axios from "axios";
import { MENU_LOADING, MENU_SUCCESS } from "./types";

const getMenu = "../components/menu.json";

export const getItems = () => dispatch => {
  dispatch(setMenuLoading());
  //   axios.get('/api/items').then(res =>
  //     dispatch({
  //       type: GET_ITEMS,
  //       payload: res.data
  //     })
  //   );

  return {
    type: MENU_SUCCESS,
    menu: getMenu || null
  };
};

export const setMenuLoading = () => {
  return {
    type: MENU_LOADING
  };
};
