import { combineReducers } from "redux";
import PRODUCTS from "../../data/dummy-data";

const initialState = {
  availableProducts: PRODUCTS,

  //userProducts: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};

const productsReducer = (state = initialState, action) => {
  return state;
};

const RootReducer = combineReducers({
  productsReducer,
});

export const selectProducts = (state) => PRODUCTS;

export default RootReducer;
