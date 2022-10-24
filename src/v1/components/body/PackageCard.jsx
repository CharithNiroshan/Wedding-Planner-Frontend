import React from "react";
import {IoIosAddCircle} from "react-icons/io";
import IconButton from "./Button";
import {useHistory} from "react-router-dom";
import PriceTag from "./PriceTag";

const PackageCard = (props) => {
    const {_id, title, des, imgUrl, price, includes} = props;
    const history = useHistory();

    return (
        <div className="package-card d-flex">
            <div className="package-card-left">
                <div className="package-card-image" style={{backgroundImage: `url(${imgUrl}`}}/>
                <div className="d-flex flex-column align-items-center">
                    <h2 className="package-card-title">{title}</h2>
                    <PriceTag price={price}/>
                </div>
            </div>
            <div className="package-card-right">
                <p className="package-card-text mb-2">{des}</p>
                <p className="package-card-text mb-2">Package Includes,</p>
                <ul>
                    {includes?.map((item, index) =>
                        <li key={index}><p className="package-card-text mb-0">{item}</p></li>
                    )}
                </ul>
                <IconButton
                    className="package-card-button mt-4"
                    text="Add Booking"
                    icon={<IoIosAddCircle/>}
                    onClick={() => history.push(`/add-booking?type=1&pack=${_id}`)}
                />
            </div>
        </div>
    );
}

export default PackageCard;