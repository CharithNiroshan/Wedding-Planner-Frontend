import React from "react";
import {useSelector} from "react-redux";
import {homeContent} from "../constants/constant";

const Home = () => {
    const {type} = useSelector(state => state.auth);

    return (
        <div className="home">
            <div className="home-banner">
                <div className="home-banner-content">
                    <h2 className="home-banner-content-text">
                        Sri Lanka's Largest Wedding Vendor Directory
                    </h2>
                    <h4 className="home-banner-content-sub-text">
                        We believe in digitalizing the wedding planning is the way forward
                    </h4>
                </div>
            </div>
            {homeContent[type]}
        </div>
    );
}

export default Home;
