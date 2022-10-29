import axios from "axios";
import {setAuth, setAuthFormValues, setAuthStep} from "../store/actions/auth-actions";
import {setAlert, setIsLoading} from "../store/actions/common-actions";
import {configurations} from "../constants/constant";

export const checkForUsername = (data) => {
    return async (dispatch) => {
        dispatch(setIsLoading(true));

        try {
            const res = await axios.post(`${configurations.baseUrl}/api/auth/username-check`, {usrName: data.usrName});
            if (!res?.data?.isExists) {
                dispatch(setAuthFormValues(data));
                if (data.type === "0") {
                    dispatch(setAuthStep(1));
                } else {
                    dispatch(setAuthStep(2));
                }
            } else {
                dispatch(setAlert({type: 1, message: "Username already exits."}));
            }
        } catch (err) {
            dispatch(setAlert({type: 2, message: "Something went wrong. Please try again."}));
        } finally {
            dispatch(setIsLoading(false));
        }
    }
}

export const register = (history) => {
    return async (dispatch, getState) => {
        const state = getState();

        const user = {
            auth: state.auth.authFormValues,
            user: state.auth.userFormValues
        }

        dispatch(setIsLoading(true));

        try {
            const res = await axios.post(`${configurations.baseUrl}/api/auth/register`, user);
            dispatch(setAuth(res.data));
            dispatch(setAlert({type: 0, message: "Account created successfully."}));
            history.push("/")
        } catch (err) {
            dispatch(setAlert({type: 2, message: "Something went wrong. Please try again."}))
        } finally {
            dispatch(setIsLoading(false));
        }
    }
}

export const signIn = (data, history, navigateLink) => {
    return async (dispatch) => {
        dispatch(setIsLoading(true));

        try {
            const res = await axios.post(`${configurations.baseUrl}/api/auth/sign-in`, data);

            if (res.data.success) {
                dispatch(setAuth(res.data.data));
                dispatch(setAlert({type: 0, message: "Login Successful."}));
                if (navigateLink === undefined) {
                    history.push("/")
                } else {
                    history.push(navigateLink);
                }

            } else {
                dispatch(setAlert({type: 1, message: res.data.data.message}));
            }
        } catch (err) {
            dispatch(setAlert({type: 2, message: "Something went wrong. Please try again."}))
        } finally {
            dispatch(setIsLoading(false));
        }
    }
}

export const forgetPassword = (data, history) => {
    return async (dispatch) => {
        dispatch(setIsLoading(true));

        try {
            const res = await axios.post(`${configurations.baseUrl}/api/auth/forget-password`, data);

            if (res.data.success) {
                dispatch(setAlert({type: 0, message: res.data.data.message}));
                history.push("/");
            } else {
                dispatch(setAlert({type: 1, message: res.data.data.message}));
            }
        } catch (err) {
            dispatch(setAlert({type: 2, message: "Something went wrong. Please try again."}))
        } finally {
            dispatch(setIsLoading(false));
        }
    }
}

export const resetPassword = (data, resetToken, history) => {
    return async (dispatch) => {
        dispatch(setIsLoading(true));

        try {
            const res = await axios.put(`${configurations.baseUrl}/api/auth/reset-password/${resetToken}`, data);

            if (res.data.success) {
                dispatch(setAlert({type: 0, message: res.data.data.message}));
                history.push("/auth/sign-in")
            } else {
                dispatch(setAlert({type: 1, message: res.data.data.message}));
            }
        } catch (err) {
            dispatch(setAlert({type: 2, message: "Something went wrong. Please try again."}))
        } finally {
            dispatch(setIsLoading(false));
        }
    }
}

