import PRODUCTS  from "../../data/dummy-data";

const initialState = {
  availableProducts: PRODUCTS,

  //userProducts: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};

const productsReducer = (state = initialState, action) => {
  return state;
};

const RootReducer = combineReducers({
  productsReducer
})

export const selectProducts = state => state.availableProducts;


export default RootReducer;
