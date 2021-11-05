export const SET_AVAILABLE_PRODUCTS = "SET_AVAILABLE_PRODUCTS";

export const setAvailableProducts = (availableProducts) => (dispatch) => {
  dispatch({
    type: SET_AVAILABLE_PRODUCTS,
    payload: availableProducts,
  });
};
