import axios from "axios";
import {configurations} from "../constants/constant";
import {setAlert, setBooking, setBookings, setIsLoading} from "../store/actions/common-actions";
import {setUser} from "../store/actions/auth-actions";

export const addBooking = (venId, usrId, data, history) => {
    return async (dispatch, getState) => {
        const {auth} = getState();
        dispatch(setIsLoading(true));

        const booking = {
            venId: venId,
            usrId: usrId,
            ...data,
        }

        try {
            const res = await axios.post(`
                ${configurations.baseUrl}/api/user/add-booking`,
                booking,
                {
                    headers: {
                        "Authorization": `Bearer ${auth.token}`
                    }
                }
            );
            history.push("/bookings");
            dispatch(setAlert({type: 0, message: res.data.data.message}));
        } catch (err) {
            dispatch(setAlert({type: 2, message: "Something went wrong. Please try again."}));
        } finally {
            dispatch(setIsLoading(false));
        }
    }
}

export const addReview = (venId, usrId, data, history) => {
    return async (dispatch) => {
        dispatch(setIsLoading(true));

        const review = {
            venId: venId,
            usrId: usrId,
            ...data,
        }

        try {
            const res = await axios.post(`${configurations.baseUrl}/api/user/add-review`, review);
            if (res.data.success) {
                dispatch(setAlert({type: 0, message: res.data.data.message}));
                history.push(`/business-profile/${venId}`);
            } else {
                dispatch(setAlert({type: 1, message: res.data.data.message}));
                history.push(`/business-profile/${venId}`);
            }
        } catch (err) {
            console.log(err.message)
        } finally {
            dispatch(setIsLoading(false));
        }
    }
}

export const fetchBookings = (id, type) => {
    return async (dispatch, getState) => {
        const {auth} = getState();

        dispatch(setIsLoading(true));
        try {
            const res = await axios.get(`
            ${configurations.baseUrl}/api/user/get-bookings/${type}/${id}`,
                {
                    headers: {
                        "Authorization": `Bearer ${auth.token}`
                    }
                }
            );
            dispatch(setBookings(res.data.data.bookings));
        } catch (err) {
            console.log(err.response.data);
        } finally {
            dispatch(setIsLoading(false));
        }
    }
}

export const fetchBooking = (id) => {
    return async (dispatch) => {
        dispatch(setIsLoading(true));
        try {
            const res = await axios.get(`${configurations.baseUrl}/api/user/get-booking/${id}`);
            dispatch(setBooking(res.data.data.booking));
        } catch (err) {
            console.log(err?.response?.data);
        } finally {
            dispatch(setIsLoading(false));
        }
    }
}

export const updateUserProfile = (data) => {
    return async (dispatch, getState) => {
        const {auth} = getState();

        dispatch(setIsLoading(true));
        try {
            const res = await axios.put(`${configurations.baseUrl}/api/user/update-profile/${auth.user._id}`, data);
            dispatch(setUser(res.data.data.user));
            dispatch(setAlert({type: 0, message: res.data.data.message}));
        } catch (err) {
            console.log(err.response.data);
            dispatch(setAlert({type: 2, message: "Something went wrong. Please try again."}));
        } finally {
            dispatch(setIsLoading(false));
        }
    }
}