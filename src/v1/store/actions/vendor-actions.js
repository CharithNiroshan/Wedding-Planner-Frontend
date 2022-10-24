import {vendorActionTypes} from "../constants/vendor-action-types";

export const setVendors = (vendors) => {
    return ({
        type: vendorActionTypes.SET_VENDORS,
        payload: vendors
    })
}

export const setVendor = (vendor) => {
    return ({
        type: vendorActionTypes.SET_VENDOR,
        payload: vendor
    })
}

export const removeVendor = () => {
    return ({
        action: vendorActionTypes.REMOVE_VENDOR,
        payload: null,
    })
}


