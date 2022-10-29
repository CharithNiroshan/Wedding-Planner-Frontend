import {setIsLoading, setUserHomeData} from "../store/actions/common-actions";
import axios from "axios";
import {configurations} from "../constants/constant";

export const fetchVendorHomeContent = () => {
    return async (dispatch, getState) => {
        const {auth} = getState();

        dispatch(setIsLoading(true));
        try {
            const res = await axios.get(
                `${configurations.baseUrl}/api/vendor/${auth.user._id}`,
                {
                    headers:{
                        "Authorization" : `Bearer ${auth.token}`
                    }
                }
            );
            dispatch(setUserHomeData(res.data.data))
        } catch (err) {
            console.log(err.message);
        } finally {
            dispatch(setIsLoading(false));
        }
    }
}