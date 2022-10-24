import {authActionTypes} from "../constants/auth-action-types";

export const setAuth = (auth) => {
    return ({
        type: authActionTypes.SET_AUTH,
        payload: auth
    })
}

export const setAuthFormValues = (data) => {
    return ({
        type: authActionTypes.SET_AUTH_FORM_VALUES,
        payload: data
    })
}

export const setUser = (data) => {
    return ({
        type: authActionTypes.SET_USER,
        payload: data
    })
}

export const setAuthStep = (step) => {
    return ({
        type: authActionTypes.SET_AUTH_STEP,
        payload: step
    })
}

export const setUserFormValues = (data) => {
    return ({
        type: authActionTypes.SET_USER_FORM_VALUES,
        payload: data
    })
}

export const removeAuth = () => {
    return ({
        type:authActionTypes.REMOVE_AUTH,
        payload:{
            type:3,
            token:null,
            user:null
        }
    })
}