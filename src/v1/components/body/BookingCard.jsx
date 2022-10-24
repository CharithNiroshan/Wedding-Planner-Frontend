import React from 'react';
import {Avatar} from "@material-ui/core";
import Chip from "./Chip";
import {useHistory} from "react-router-dom";
import MultiTypeDataField from "./MultiTypeDataField";
import {bookingStatusTypes} from "../../constants/constant";

const BookingCard = (props) => {
    const {_id, vendor, status, type} = props;
    const history = useHistory();

    return (
        <div
            className='booking-card d-flex flex-column align-items-stretch'
            onClick={()=>history.push(`/bookings/booking/${_id}`)}
        >
            <div className="d-flex align-items-center justify-content-center mb-2">
                <Avatar src={vendor?.logoUrl} className="booking-card-image"/>
                <div>
                    <h2 className="booking-card-title mb-0">{vendor?.title}</h2>
                    <h4 className="booking-card-sub-title mb-0">{vendor?.category}</h4>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center">
                <MultiTypeDataField label="Type" value={type === 0 ? "Custom" : "Package"}/>
                <Chip text={bookingStatusTypes[status]} type={bookingStatusTypes[status]}/>
            </div>
        </div>
    );
}

export default BookingCard;