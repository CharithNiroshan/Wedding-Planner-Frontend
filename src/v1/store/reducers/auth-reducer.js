import {authActionTypes} from "../constants/auth-action-types";

const initialState = {
    type: 3,
    authStep: 0,
    authFormValues: {},
    userFormValues: {}
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authActionTypes.SET_AUTH: {
            return {
                ...state,
                token: action.payload.token,
                type: action.payload.type,
                user: action.payload.user
            }
        }

        case authActionTypes.REMOVE_AUTH: {
            return {
                ...state,
                token: action.payload.token,
                type: action.payload.type,
                user: action.payload.user
            }
        }

        case authActionTypes.SET_USER: {
            return {
                ...state,
                user: action.payload
            }
        }

        case authActionTypes.SET_AUTH_FORM_VALUES: {
            return {
                ...state,
                authFormValues: action.payload
            }
        }

        case authActionTypes.SET_AUTH_STEP: {
            return {
                ...state,
                authStep: action.payload
            }
        }

        case authActionTypes.SET_USER_FORM_VALUES: {
            return {
                ...state,
                userFormValues: action.payload
            }
        }

        default:
            return state;
    }
}