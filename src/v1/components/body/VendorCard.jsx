import React from "react";
import {
    Avatar, Typography, Grid,
} from "@material-ui/core";
import {Rating} from "@material-ui/lab";
import {useHistory} from "react-router-dom";

const VendorCard = (props) => {
    const {_id, title, coverPhotoUrl, logoUrl, category, rating, noOfReviews} = props;
    const history = useHistory();

    return (
        <div
            className="vendor-card"
            onClick={() => history.push(`/business-profile/${_id}`)}
            style={{background: `url(${coverPhotoUrl})`}}
        >
            <div className="vendor-card-content">
                <Avatar className="vendor-card-logo" src={logoUrl}/>
                <Typography className="vendor-card-content-title">
                    {title.length > 18 ? `${title.substring(0,18)}..`: title}
                </Typography>
                <Typography className="vendor-card-content-category">{category}</Typography>
                {rating == null ?
                    (
                        <Typography className="vendor-card-content-text">
                            Not Rated Yet
                        </Typography>
                    ) : (
                        <Grid container className="vendor-card-content-rating">
                            <Grid item>
                                <Rating value={rating} readOnly/>
                            </Grid>
                            <Grid item>
                                <Typography>{rating.toFixed(2)}</Typography>
                            </Grid>
                            <Grid item className="mx-2">
                                <Typography>( {noOfReviews} reviews )</Typography>
                            </Grid>
                        </Grid>
                    )}
            </div>
        </div>);
}

export default VendorCard;