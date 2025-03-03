import { combineReducers } from "redux";

import { modalOrderReducer } from "./modal-order";
import { ordersReducer } from "./orders";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
    user: userReducer,
    orders: ordersReducer,
    modalOrder: modalOrderReducer
});