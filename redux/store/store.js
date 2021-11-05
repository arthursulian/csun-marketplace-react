import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productsReducer from "../reducers/products";

const rootReducer = combineReducers({ productsReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));
