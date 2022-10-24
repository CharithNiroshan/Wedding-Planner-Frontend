import axios from "axios";
import {configurations} from "../constants/constant";
import {setCategories, setDistricts, setIsLoading, setUserHomeData} from "../store/actions/common-actions";
import {setVendor, setVendors} from "../store/actions/vendor-actions";

export const fetchCategories = () => {
    return async (dispatch) => {
        dispatch(setIsLoading(true));
        try {
            const res = await axios.get(`${configurations.baseUrl}/api/guest/get-categories`);
            dispatch(setCategories(res.data.data.categories));
        } catch (err) {
            console.log(err?.response?.data);
        } finally {
            dispatch(setIsLoading(false));
        }
    }
}

export const fetchDistricts = () => {
    return async (dispatch) => {
        dispatch(setIsLoading(true));
        try {
            const res = await axios.get(`${configurations.baseUrl}/api/guest/get-districts`);
            dispatch(setDistricts(res.data.data.districts));
        } catch (err) {
            console.log(err?.response?.data);
        } finally {
            dispatch(setIsLoading(false));
        }
    }
}

export const fetchHomeContent = () => {
    return async (dispatch) => {
        dispatch(setIsLoading(true));
        try {
            const res = await axios.get(`${configurations.baseUrl}/api/guest/`);
            dispatch(setUserHomeData(res.data.data))
        } catch (err) {
            console.log(err.message);
        } finally {
            dispatch(setIsLoading(false));
        }
    }
}

export const fetchVendor = (id) => {
    return async (dispatch) => {
        dispatch(setIsLoading(true));
        try {
            const res = await axios.get(`${configurations.baseUrl}/api/guest/business-profile/${id}`);
            dispatch(setVendor(res.data.data));
        } catch (err) {
            console.log(err.message);
        } finally {
            dispatch(setIsLoading(false));
        }
    }
}

export const fetchVendors = (data) => {
    return async (dispatch) => {
        dispatch(setIsLoading(true));
        try {
            const res = await axios.post(`${configurations.baseUrl}/api/guest/business-profile/search`, data);
            dispatch(setVendors(res.data.data));
        } catch (err) {
            console.log(err?.response?.data);
        } finally {
            dispatch(setIsLoading(false));
        }
    }
}

