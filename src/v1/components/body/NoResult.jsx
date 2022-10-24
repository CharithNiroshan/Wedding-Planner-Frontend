import React from "react";
import image from "../../assets/images/no-results.png";

function NoResult({text}) {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center no-result">
            <img src={image} className="no-result-image" alt="no-result-img"/>
            <h6 className="no-result-text">{text}</h6>
        </div>
    );
}

export default NoResult;