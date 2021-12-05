import { SET_AVAILABLE_PRODUCTS } from "../actions/products";
import PRODUCTS, { FILTEREDPRODUCTS, USERS } from "../../data/dummy-data";

const initialState = {
  availableProducts: FILTEREDPRODUCTS,
  users: USERS,

  //userProducts: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
