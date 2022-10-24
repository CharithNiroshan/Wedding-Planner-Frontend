import React from "react";

const PriceTag = (props) => {
    const {price} = props;

    return (
        <div className="price-tag d-flex align-items-center">
           <p className="price-tag-text">Rs. {price} /=</p>
        </div>
    )
}

export default PriceTag;