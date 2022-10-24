import {commonActionTypes} from "../constants/common-action-types";

export const setCategories = (categories) => {
    return ({
        type: commonActionTypes.SET_CATEGORIES,
        payload: categories
    })
}

export const setDistricts = (districts) => {
    return ({
        type: commonActionTypes.SET_DISTRICTS,
        payload: districts
    })
}

export const setIsLoading = (isLoading) => {
    return ({
        type: commonActionTypes.SET_ISLOADING,
        payload: isLoading
    })
}

export const setAlert = (alert) => {
    return ({
        type: commonActionTypes.SET_ALERT,
        payload: alert
    })
}

export const setBookings = (bookings) => {
    return ({
        type: commonActionTypes.SET_BOOKINGS,
        payload: bookings
    })
}

export const setBooking = (booking) => {
    return ({
        type: commonActionTypes.SET_BOOKING,
        payload: booking
    })
}

export const setUserHomeData = (data) => {
    return ({
        type: commonActionTypes.SET_USERHOMEDATA,
        payload: data
    })
}

