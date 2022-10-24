import React from "react";
import {
    Avatar,
} from "@material-ui/core";
import {Rating} from "@material-ui/lab";
import {ConvertToDateString} from "../../utils/covertToDate";

const ReviewCard = (props) => {
    const {user, rating, des, date} = props;

    return (
        <div className="review-card">
            <div className="d-flex align-items-center mb-2">
                <Avatar src={user?.prfImgUrl} className="review-card-user-image"/>
                <div className="flex-grow-1">
                    <h2 className="review-card-user-name mb-0">{user?.disName}</h2>
                    <h4 className="review-card-date">{ConvertToDateString(date)}</h4>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-2">
                <Rating value={rating} readOnly className="review-card-rating"/>
                <h5 className="review-card-rating-value">{rating}</h5>
            </div>
            <p className="review-card-description">{des}</p>
        </div>
    );
}

export default ReviewCard;