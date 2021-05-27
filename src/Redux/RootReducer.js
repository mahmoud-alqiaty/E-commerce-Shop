import { combineReducers } from "redux";
import shopReducer from "./Shoping/Reducers";

const RootReducer = combineReducers({
    shop: shopReducer
} )

export default RootReducer