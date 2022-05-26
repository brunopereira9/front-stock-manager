import { combineReducers } from "redux";

import { productReducer } from "./Product/reducer";

export const rootReducer = combineReducers ({
  productReducer,
})