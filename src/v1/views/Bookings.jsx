import React, {useEffect, useState} from "react";
import {ConvertToDateString} from "../utils/covertToDate";
import {AiFillBook} from "react-icons/ai";
import BookingCard from "../components/body/BookingCard";
import {Grid} from "@material-ui/core";
import Tabbar from "../components/body/Tabbar";
import {fetchBookings} from "../services/user-services";
import {useDispatch, useSelector} from "react-redux";
import NoResult from "../components/body/NoResult";

const items = ["All", "Accepted", "Pending", "Rejected"]

const Bookings = () => {
    const [index, setIndex] = useState(0);
    const dispatch = useDispatch();
    const {bookings} = useSelector(state => state.common);
    const {user} = useSelector(state => state.auth);

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchBookings(user._id, items[index]))
        }
        fetchData();
    }, [dispatch, index, user._id]);

    return (
        <div className="bookings">
            <div className="bookings-top d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <AiFillBook className="bookings-top-icon"/>
                    <h4 className="bookings-top-title mb-0">Bookings</h4>
                </div>
                <p className="bookings-top-date mb-0">{ConvertToDateString(Date.now())}</p>
            </div>
            <div className="bookings-bottom">
                <Tabbar items={items} index={index} setIndex={setIndex}>
                    {
                        bookings?.length === 0 ?
                            <NoResult text="No bookings found."/>
                            :
                            <Grid container spacing={2}>
                                {bookings?.map((item, index) => (
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                        <BookingCard {...item}/>
                                    </Grid>
                                ))}
                            </Grid>
                    }
                </Tabbar>
            </div>
        </div>
    )
}

export default Bookings;
