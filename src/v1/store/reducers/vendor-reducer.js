import {vendorActionTypes} from "../constants/vendor-action-types";

const initialState = {}

export const vendorReducer = (state = initialState, action) => {
    switch (action.type) {
        case vendorActionTypes.SET_VENDORS: {
            return {
                ...state,
                vendors: action.payload
            };
        }

        case vendorActionTypes.SET_VENDOR: {
            return {
                ...state,
                vendor: action.payload
            }
        }

        default:
            return state;
    }
}