import React, {useEffect} from "react";
import {BrowserRouter} from "react-router-dom";
import {useDispatch} from "react-redux";
import "./v1/assets/css/main.scss";
import Client from "./Client";
import {fetchCategories, fetchDistricts} from "./v1/services/guest-services";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchDistricts());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Client/>
        </BrowserRouter>
    );
}

export default App;
