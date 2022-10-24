import {combineReducers} from "redux";
import {vendorReducer} from "./vendor-reducer";
import {authReducer} from "./auth-reducer";
import {commonReducer} from "./common-reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    common:commonReducer,
    vendorDS: vendorReducer,
});