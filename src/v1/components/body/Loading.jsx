import React from "react";
import image from "../../assets/images/logo.png";

const Loading = () => {
    return (
        <div className="loading d-flex align-items-center justify-content-center">
            <img src={image} alt="logo" className="loading-image"/>
        </div>
    );
}

export default Loading;