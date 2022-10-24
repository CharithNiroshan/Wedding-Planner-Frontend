import {commonActionTypes} from "../constants/common-action-types";

const initialState = {}

export const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case commonActionTypes.SET_CATEGORIES: {
            return {
                ...state,
                categories: action.payload
            }
        }

        case commonActionTypes.SET_DISTRICTS: {
            return {
                ...state,
                districts: action.payload
            }
        }

        case commonActionTypes.SET_ISLOADING: {
            return {
                ...state,
                isLoading: action.payload
            }
        }

        case commonActionTypes.SET_ALERT: {
            return {
                ...state,
                alert: action.payload
            }
        }

        case commonActionTypes.SET_BOOKINGS: {
            return {
                ...state,
                bookings: action.payload
            }
        }

        case commonActionTypes.SET_BOOKING: {
            return {
                ...state,
                booking: action.payload
            }
        }

        case commonActionTypes.SET_USERHOMEDATA: {
            return {
                ...state,
                userHomeData: action.payload
            }
        }

        default:
            return state;
    }
}