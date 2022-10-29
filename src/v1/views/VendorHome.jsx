import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchVendorHomeContent} from "../services/vendor-services";

const VendorHome = () => {
    const dispatch =useDispatch();

    useEffect(()=>{
        const fetchData = async () => {
            await dispatch(fetchVendorHomeContent());
        }
        fetchData();
    },[dispatch])

    return (
        <div></div>
    );
}

export default VendorHome;