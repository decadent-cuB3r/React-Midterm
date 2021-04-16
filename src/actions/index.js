import {
    SET_PRODUCT_ITEMS,
    SET_NAVBAR_ACTIVEITEM,
  } from "../utils/constants";

export const pageContentsSet = (dispatch, products) => {
    dispatch({
      type: SET_PRODUCT_ITEMS,
      payload: products,
    });
  };
  
  export const activeNavItemSet = (dispatch, activeNavItem) => {
    dispatch({
      type: SET_NAVBAR_ACTIVEITEM,
      payload: activeNavItem,
    });
  };