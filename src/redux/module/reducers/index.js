import { combineReducers } from "redux";
import { productReducer,selectedProductReducer,cart } from "./product-reducer";

const reducers=combineReducers({
cart:cart

})

export default reducers;