import React, {useEffect} from "react";
import {ConvertToDateString} from "../utils/covertToDate";
import {Avatar, Grid} from "@material-ui/core";
import Chip from "../components/body/Chip";
import MultiTypeDataField from "../components/body/MultiTypeDataField";
import {bookingStatusTypes, bookingTypes} from "../constants/constant";
import {fetchBooking} from "../services/user-services";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Booking = (props) => {
    const {booking} = useSelector(state => state.common);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchBooking(props[0].match.params.id));
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, props[0].match.id]);

    return (
        <div className="booking">
            <div className="booking-top d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <Avatar src={booking?.vendor?.logoUrl}/>
                    <h4 className="sidebar-right-top-date mx-3">{booking?.vendor?.title}</h4>
                </div>
                <Chip text={bookingStatusTypes[booking?.status]} type={bookingStatusTypes[booking?.status]}/>
            </div>
            <Grid container spacing={2}>
                <Grid item md={7} xs={12}>
                    <div className="booking-section">
                        <h1 className="booking-section-title mb-4">Booking Information</h1>
                        <MultiTypeDataField label="Type" value={bookingTypes[booking?.type]}/>
                        <MultiTypeDataField label="Reference No" value={booking?._id}/>
                        <MultiTypeDataField label="Date" value={ConvertToDateString(booking?.date)}/>
                        {booking?.type === 0 &&
                            <MultiTypeDataField label="Services Required" value={booking?.services} type="list"/>}
                        {booking?.type === 1 &&
                            <>
                                <MultiTypeDataField label="Package Name" value={booking?.package?.title}/>
                                <MultiTypeDataField label="Package Description" value={booking?.package?.des}/>
                                <MultiTypeDataField label="Package Services" value={booking?.package?.includes}
                                                    type="list"/>
                                <MultiTypeDataField label="Package Price" value={`Rs. ${booking?.package?.price} /=`}/>
                            </>
                        }
                        {booking?.extraInfo !== null &&
                            <MultiTypeDataField label="Extra Information" value={booking?.extraInfo}/>}
                        {booking?.status === 2 &&
                            <MultiTypeDataField label="Rejected Message" value={booking?.message}/>}
                        <MultiTypeDataField label="Booked On" value={ConvertToDateString(booking?.bookedOn)}/>
                    </div>
                </Grid>
                <Grid item md={5} xs={12}>
                    <div className="booking-section">
                        <h1 className="booking-section-title mb-4">
                            Vendor Contact Information
                            <Link className="booking-link" to={`/business-profile/${booking?.vendor?._id}`}>view
                                profile</Link>
                        </h1>
                        <MultiTypeDataField label="Contact Number" value={booking?.vendor?.cntNo}/>
                        <MultiTypeDataField label="Email" value={booking?.vendor?.email}/>
                        <MultiTypeDataField label="Address" value={booking?.vendor?.address}/>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Booking;